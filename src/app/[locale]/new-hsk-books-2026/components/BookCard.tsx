import React from 'react';
import Image from 'next/image';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';

type DownloadLink = {
  name: string;
  url: string;
};

type BookCardProps = {
  title: string;
  image: string;
  alt: string;
  fallbackImage?: string;
  downloadLinks: DownloadLink[];
};

export function BookCard({
  title,
  image,
  alt,
  fallbackImage,
  downloadLinks,
}: BookCardProps) {
  return (
    <Card as='article' elevation='3'>
      <h3 className='text-center text-3xl mb-2'>{title}</h3>
      <picture>
        {fallbackImage && <source srcSet={image} width={500} height={500} />}
        <Image
          src={fallbackImage || image}
          alt={alt}
          width={500}
          height={500}
          loading='lazy'
          className='object-contain aspect-square mx-auto'
        />
      </picture>
      <div className='flex flex-col text-center mt-2'>
        {downloadLinks.map((link, index) => (
          <Button type='yellow' as='link' href={link.url} key={index}>
            {link.name}
          </Button>
        ))}
      </div>
    </Card>
  );
}
