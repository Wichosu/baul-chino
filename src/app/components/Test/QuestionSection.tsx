import React from 'react';

type Props = {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
};

export function QuestionSection({
  title,
  description,
  className = 'mb-8',
  children,
}: Props) {
  return (
    <section className={className}>
      <h2 className='text-3xl font-medium text-center mb-2'>{title}</h2>
      <p className='text-xl text-justify w-fit mx-auto mb-6'>{description}</p>
      {children}
    </section>
  );
}
