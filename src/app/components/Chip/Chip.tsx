import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Chip({ children }: Props) {
  return (
    <div className='border-2 border-yellow-400 bg-yellow-50 p-2 rounded-xl w-fit text-lg capitalize'>
      {children}
    </div>
  );
}
