import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function SelectScrollUpButton({ children }: Props) {
  return (
    <Select.ScrollUpButton className='flex h-[25px] cursor-default items-center justify-center bg-white text-violet11'>
      {children}
    </Select.ScrollUpButton>
  );
}
