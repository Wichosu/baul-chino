import { ReactNode } from 'react';

interface Props {
  title: string | ReactNode;
  children: string | ReactNode;
}

export function Hero({ title, children }: Props) {
  return (
    <section className='my-6'>
      <h1 className='text-4xl font-medium text-ink tracking-tight mb-4'>
        {title}
      </h1>
      <p className='text-xl font-normal text-ink-2 max-w-[var(--measure)]'>
        {children}
      </p>
    </section>
  );
}
