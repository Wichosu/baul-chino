import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Chip({ children }: Props) {
  return (
    <div className='border border-line bg-brass-tint p-2 rounded-xl w-fit text-lg capitalize text-ink'>
      {children}
    </div>
  );
}
