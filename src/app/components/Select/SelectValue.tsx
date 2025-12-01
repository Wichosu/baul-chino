import React from 'react';
import { Select } from 'radix-ui';

type Props = React.ComponentProps<typeof Select.Value>;

export function SelectValue({ ...props }: Props) {
  return <Select.Value {...props} />;
}
