'use client';
import React from 'react';
import { Download, ArrowBigDownDash, Save, TriangleAlert } from 'lucide-react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { motion } from 'motion/react';
import { VisuallyHidden } from '@/src/app/components/VisuallyHidden';
import { useTranslations } from 'next-intl';

type Props = {
  url: string;
  filename: string;
  children?: React.ReactNode;
} & Omit<ButtonProps, 'children'>;

type FetchStatus = 'unfetch' | 'fetching' | 'fetched' | 'failed';

export function DownloadButton({ url, filename, ...props }: Props) {
  const t = useTranslations('Components.DownloadButton');

  const [status, setStatus] = React.useState<FetchStatus>('unfetch');

  async function downloadOnce() {
    // cache: 'no-store' is required here. The <audio preload='metadata'> element
    // fetches this same URL in no-cors mode (no Origin header), and the CDN
    // answers without Access-Control-Allow-Origin and without Vary: Origin, so
    // Chrome stores a single URL-keyed entry with no CORS header. A default
    // fetch would reuse that entry and fail the CORS check; no-store bypasses it.
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const blob = await response.blob();

    const mimeType = blob.type;
    let extension = '';

    if (mimeType.includes('mpeg')) extension = '.mp3';

    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename + extension;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(blobUrl);
  }

  async function handleClick() {
    if (status === 'fetching') return;

    setStatus('fetching');

    try {
      await downloadOnce();
      setStatus('fetched');
    } catch {
      // one automatic retry before surfacing the error state
      try {
        await downloadOnce();
        setStatus('fetched');
      } catch {
        setStatus('failed');
      }
    }
  }

  return (
    <Button
      onClick={handleClick}
      type='yellow'
      padding='1'
      className='overflow-hidden'
      title={status === 'failed' ? t('Error') : undefined}
      {...props}
    >
      {status === 'unfetch' && (
        <>
          <Download />
          <VisuallyHidden>{t('Download')}</VisuallyHidden>
        </>
      )}
      {status === 'fetching' && (
        <motion.div
          initial={{ translateY: '-100%' }}
          animate={{ translateY: '120%' }}
          transition={{
            type: 'spring',
            mass: 1,
            stiffness: 150,
            damping: 30,
            repeat: Infinity,
          }}
        >
          <ArrowBigDownDash />
          <VisuallyHidden>{t('Fetching')}</VisuallyHidden>
        </motion.div>
      )}
      {status === 'fetched' && (
        <>
          <Save />
          <VisuallyHidden>{t('Fetched')}</VisuallyHidden>
        </>
      )}
      {status === 'failed' && (
        <>
          <TriangleAlert />
          <VisuallyHidden>{t('Error')}</VisuallyHidden>
        </>
      )}
    </Button>
  );
}
