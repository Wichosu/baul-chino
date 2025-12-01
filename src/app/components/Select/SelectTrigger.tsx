import React from 'react';
import { Select } from 'radix-ui';
import { SelectIcon } from './SelectIcon';
import { SelectValue } from './SelectValue';

type Props = {
  children: string;
  // | React.ReactElement<typeof Select.Icon>[];
  ariaLabel: string;
};

export function SelectTrigger({ children, ariaLabel }: Props) {
  return (
    <Select.Trigger
      className={`
      inline-flex h-10 items-center justify-center gap-2 rounded bg-yellow-100 px-4 leading-none text-black shadow-md outline-none 
      cursor-pointer transition-colors
      hover:bg-yellow-200 
      focus:shadow-[0_0_0_2px] focus:shadow-black focus:bg-yellow-200
      data-placeholder:text-black
    `}
      aria-label={ariaLabel}
    >
      <SelectValue placeholder={children} />
      <SelectIcon />
    </Select.Trigger>
  );
}
