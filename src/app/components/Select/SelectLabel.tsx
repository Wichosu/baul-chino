import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function SelectLabel({ children }: Props) {
  return (
    <Select.Label className='px-6 font-medium leading-6 text-black'>
      {children}
    </Select.Label>
  );
}
