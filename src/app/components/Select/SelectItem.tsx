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
        'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none',
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
