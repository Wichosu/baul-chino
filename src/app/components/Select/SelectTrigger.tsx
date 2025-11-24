import React from 'react';
import { Select } from 'radix-ui';

type Props = {
  children:
    | React.ReactElement<typeof Select.Value>[]
    | React.ReactElement<typeof Select.Icon>[];
};

export function SelectTrigger({ children }: Props) {
  return (
    <Select.Trigger
      className='inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9'
      aria-label='Food'
    >
      {children}
    </Select.Trigger>
  );
}
