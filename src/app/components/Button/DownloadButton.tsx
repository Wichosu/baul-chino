'use client';
import React from 'react';
import { Download, ArrowBigDownDash, Save } from 'lucide-react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { motion } from 'motion/react';

type Props = {
  url: string;
  filename: string;
  children?: React.ReactNode;
} & Omit<ButtonProps, 'children'>;

type FetchStatus = 'unfetch' | 'fetching' | 'fetched';

export function DownloadButton({ url, filename, ...props }: Props) {
  const [status, setStatus] = React.useState<FetchStatus>('unfetch');

  async function handleClick() {
    if (status === 'fetching') return;

    try {
      setStatus('fetching');

      const response = await fetch(url);

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

      setStatus('fetched');
    } catch {
      setStatus('unfetch');
    }
  }

  return (
    <Button
      onClick={handleClick}
      type='yellow'
      padding='1'
      className='overflow-hidden'
      {...props}
    >
      {status === 'unfetch' && <Download />}
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
        </motion.div>
      )}
      {status === 'fetched' && <Save />}
    </Button>
  );
}
