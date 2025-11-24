import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function SelectViewport({ children }: Props) {
  return <Select.Viewport className='p-[5px]'>{children}</Select.Viewport>;
}
