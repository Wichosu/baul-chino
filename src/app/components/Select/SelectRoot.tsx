import React from 'react';
import { Select } from 'radix-ui';

type SelectRootType = React.ComponentProps<typeof Select.Root>;

type Props = {
  children:
    | React.ReactElement<typeof Select.Trigger>[]
    | React.ReactElement<typeof Select.Portal>[];
} & Omit<SelectRootType, 'children'>;

export function SelectRoot({ children, ...props }: Props) {
  return <Select.Root {...props}>{children}</Select.Root>;
}
