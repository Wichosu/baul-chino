import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function SelectLabel({ children }: Props) {
  return (
    <Select.Label className='px-[25px] text-xs leading-[25px] text-mauve11'>
      {children}
    </Select.Label>
  );
}
