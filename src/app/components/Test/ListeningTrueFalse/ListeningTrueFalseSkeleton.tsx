import React from 'react';

type Props = {
  skeletonItems: number;
};

export function ListeningTrueFalseSkeleton({ skeletonItems }: Props) {
  const skeletonItemsArray = Array.from({ length: skeletonItems });

  return (
    <section className='grid gap-8'>
      {skeletonItemsArray.map((_, index) => (
        <article
          key={index}
          className='flex gap-12 items-center justify-center'
        >
          <div className='relative w-1/4 h-24 bg-gray-300 animate-pulse'></div>
          <div className='w-64 h-1/3 bg-gray-300 animate-pulse' />
          <div className='flex gap-2'>
            <div className='w-16 h-8 bg-gray-300 animate-pulse' />
            <div className='w-16 h-8 bg-gray-300 animate-pulse' />
          </div>
        </article>
      ))}
    </section>
  );
}
