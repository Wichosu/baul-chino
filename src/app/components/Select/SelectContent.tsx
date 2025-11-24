import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children:
    | React.ReactElement<typeof Select.ScrollUpButton>[]
    | React.ReactElement<typeof Select.Viewport>[]
    | React.ReactElement<typeof Select.ScrollDownButton>[];
};

export function SelectContent({ children }: Props) {
  return (
    <Select.Content className='overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
      {children}
    </Select.Content>
  );
}
