import React from 'react';
import { Select } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

export function SelectIcon() {
  return (
    <Select.Icon>
      <ChevronDown />
    </Select.Icon>
  );
}
