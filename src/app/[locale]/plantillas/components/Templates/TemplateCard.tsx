import Image from 'next/image';
import { Download } from 'lucide-react';
import { Button } from '@/src/app/components/Button';

type Props = {
  textAlt: string;
  img: string;
  imgFallback: string;
  pdfUrl: string;
};

export default function TemplateCard({
  textAlt,
  img,
  imgFallback,
  pdfUrl,
}: Props) {
  return (
    <article className='inline-block w-fit no-underline my-2.5 snap-center lg:mx-auto'>
      <picture className='mx-auto'>
        <source srcSet={img} width={500} height={500} />
        <Image
          alt={textAlt}
          src={imgFallback}
          loading='lazy'
          width={500}
          height={500}
          className='aspect-square object-contain'
        />
      </picture>
      <Button
        as='link'
        href={pdfUrl}
        type='yellow'
        className='flex items-center w-fit mx-auto text-lg'
      >
        {textAlt}
        <Download className='ml-2 text-white' />
      </Button>
    </article>
  );
}
