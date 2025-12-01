import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children: React.ReactElement<typeof Select.Content>;
};

export function SelectPortal({ children }: Props) {
  return <Select.Portal>{children}</Select.Portal>;
}
