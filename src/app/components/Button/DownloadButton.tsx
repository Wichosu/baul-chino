import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

type Props = {
  url: string;
  filename: string;
  children?: React.ReactNode;
} & Omit<ButtonProps, 'children'>;

export function DownloadButton({ url, filename, ...props }: Props) {
  async function handleClick() {
    try {
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
    } catch (error) {
      const errorMessage = error as Error;

      console.error(errorMessage.message);
    }
  }

  return (
    <Button onClick={handleClick} type='yellow' padding='1' {...props}>
      <Download />
    </Button>
  );
}
