import React from 'react';
import { Select } from 'radix-ui';
import { Check } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: string;
  children: string;
  className?: string;
  disabled?: boolean;
};

export function SelectItem({
  value = '',
  children,
  className = '',
  disabled = false,
  ...props
}: Props) {
  return (
    <Select.Item
      value={value}
      className={twMerge(
        `
        relative flex h-7 select-none items-center rounded pl-6 pr-8 leading-none text-black cursor-pointer
        data-disabled:pointer-events-none data-highlighted:bg-yellow-100 data-disabled:text-gray-500 
        data-highlighted:text-black data-highlighted:outline-none
        `,
        className
      )}
      disabled={disabled}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
        <Check />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
