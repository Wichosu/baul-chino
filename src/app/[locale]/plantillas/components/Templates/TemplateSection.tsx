'use client';
import TemplateCard from './TemplateCard';
import { TemplateObject } from './Templates';
import HorizontalSlide from '@/src/app/components/animations/HorizontalSlide';
import useShowAnimation from '@/src/app/hooks/useShowAnimation';

type Props = {
  children: React.ReactNode | string;
  data: TemplateObject[];
};

export default function TemplateSection({ children, data }: Props) {
  const { showAnimation, hideAnimation } = useShowAnimation();

  return (
    <>
      <h2 className='text-3xl text-black font-medium'>{children}</h2>
      <article
        onTouchStart={hideAnimation}
        className='relative mx-auto flex gap-4 overflow-scroll scroll-smooth snap-mandatory snap-x lg:overflow-visible lg:flex-wrap scrollbar-none'
      >
        {showAnimation && <HorizontalSlide width={40} height={40} />}
        {data.map((templateCard) => (
          <TemplateCard
            key={templateCard.img}
            textAlt={templateCard.textAlt}
            img={templateCard.img}
            imgFallback={templateCard.imgFallback}
            pdfUrl={templateCard.pdfUrl}
          />
        ))}
      </article>
    </>
  );
}
