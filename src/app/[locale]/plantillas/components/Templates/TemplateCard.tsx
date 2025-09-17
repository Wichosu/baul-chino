import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';

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
      <Link
        href={pdfUrl}
        download
        target='_blank'
        className='flex items-center w-fit bg-blue-600 mt-1 mx-auto py-2.5 px-5 border-none rounded-lg transition hover:bg-blue-700'
      >
        <span className='text-xl text-white font-medium'>{textAlt}</span>
        <Download className='ml-2 text-white' />
      </Link>
    </article>
  );
}
