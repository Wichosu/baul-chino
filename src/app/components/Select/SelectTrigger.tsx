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
      inline-flex h-10 items-center justify-center gap-2 rounded border border-line bg-surface px-4 leading-none text-ink shadow-sm 
      cursor-pointer transition-colors
      hover:bg-brass-tint focus:bg-brass-tint
      data-placeholder:text-ink-2
    `}
      aria-label={ariaLabel}
    >
      <SelectValue placeholder={children} />
      <SelectIcon />
    </Select.Trigger>
  );
}
