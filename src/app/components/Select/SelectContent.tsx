import React from 'react';
import { Select } from 'radix-ui';

type AllowedChildren =
  | React.ReactElement<typeof Select.ScrollUpButton>
  | React.ReactElement<typeof Select.Viewport>
  | React.ReactElement<typeof Select.ScrollDownButton>;

type Props = {
  children: AllowedChildren | AllowedChildren[];
};

export function SelectContent({ children }: Props) {
  return (
    <Select.Content className='overflow-hidden rounded-md bg-yellow-50 shadow-lg'>
      {children}
    </Select.Content>
  );
}
