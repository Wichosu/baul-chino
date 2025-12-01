import React from 'react';
import { VisuallyHidden as RadixVisuallyHidden } from 'radix-ui';

type Props = {
  children: string;
};

export function VisuallyHidden({ children }: Props) {
  return <RadixVisuallyHidden.Root>{children}</RadixVisuallyHidden.Root>;
}
