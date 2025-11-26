import React from 'react';
import { Select } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

export function SelectScrollDownButton() {
  return (
    <Select.ScrollDownButton className='flex h-6 cursor-default items-center justify-center bg-yellow-50 text-black'>
      <ChevronDown />
    </Select.ScrollDownButton>
  );
}
