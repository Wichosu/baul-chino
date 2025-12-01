import React from 'react';
import { Select } from 'radix-ui';
import { SelectScrollUpButton } from './SelectScrollUpButton';
import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectPortal } from './SelectPortal';
import { SelectViewport } from './SelectViewport';

type AllowedChildren =
  | React.ReactElement<typeof Select.ScrollUpButton>
  | React.ReactElement<typeof Select.Viewport>
  | React.ReactElement<typeof Select.ScrollDownButton>;

type Props = {
  children: AllowedChildren | AllowedChildren[];
};

export function SelectContent({ children }: Props) {
  return (
    <SelectPortal>
      <Select.Content className='overflow-hidden rounded-md bg-yellow-50 shadow-lg'>
        <SelectScrollUpButton />
        <SelectViewport>{children}</SelectViewport>
        <SelectScrollDownButton />
      </Select.Content>
    </SelectPortal>
  );
}
