import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children:
    | React.ReactElement<typeof Select.Trigger>[]
    | React.ReactElement<typeof Select.Portal>[];
};

export function SelectRoot({ children }: Props) {
  return <Select.Root>{children}</Select.Root>;
}
