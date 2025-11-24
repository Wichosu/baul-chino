import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function SelectGroup({ children }: Props) {
  return <Select.Group>{children}</Select.Group>;
}
