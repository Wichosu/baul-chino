import React from 'react';
import { Select } from 'radix-ui';
import { ChevronUp } from 'lucide-react';

export function SelectScrollUpButton() {
  return (
    <Select.ScrollUpButton className='flex h-6 cursor-default items-center justify-center bg-surface text-ink'>
      <ChevronUp />
    </Select.ScrollUpButton>
  );
}
