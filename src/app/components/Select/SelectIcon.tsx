import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function SelectIcon({ children }: Props) {
  return <Select.Icon>{children}</Select.Icon>;
}
