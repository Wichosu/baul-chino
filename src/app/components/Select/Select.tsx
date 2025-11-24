import * as React from 'react';
import { Select } from 'radix-ui';
import { twMerge } from 'tailwind-merge';
// import {
//   CheckIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
// } from '@radix-ui/react-icons';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { SelectRoot } from './SelectRoot';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';
import { SelectIcon } from './SelectIcon';
import { SelectPortal } from './SelectPortal';
import { SelectContent } from './SelectContent';
import { SelectScrollUpButton } from './SelectScrollUpButton';

export const SelectDemo = () => (
  <SelectRoot>
    <SelectTrigger>
      <SelectValue placeholder='Select a fruit…' />
      <SelectIcon>
        <ChevronDown />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUp />
        </SelectScrollUpButton>
        <Select.Viewport className='p-[5px]'>
          <Select.Group>
            <Select.Label className='px-[25px] text-xs leading-[25px] text-mauve11'>
              Fruits
            </Select.Label>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </Select.Group>

          <Select.Separator className='m-[5px] h-px bg-violet6' />

          <Select.Group>
            <Select.Label className='px-[25px] text-xs leading-[25px] text-mauve11'>
              Vegetables
            </Select.Label>
            <SelectItem value='aubergine'>Aubergine</SelectItem>
            <SelectItem value='broccoli'>Broccoli</SelectItem>
            <SelectItem value='carrot' disabled>
              Carrot
            </SelectItem>
            <SelectItem value='courgette'>Courgette</SelectItem>
            <SelectItem value='leek'>Leek</SelectItem>
          </Select.Group>

          <Select.Separator className='m-[5px] h-px bg-violet6' />

          <Select.Group>
            <Select.Label className='px-[25px] text-xs leading-[25px] text-mauve11'>
              Meat
            </Select.Label>
            <SelectItem value='beef'>Beef</SelectItem>
            <SelectItem value='chicken'>Chicken</SelectItem>
            <SelectItem value='lamb'>Lamb</SelectItem>
            <SelectItem value='pork'>Pork</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className='flex h-[25px] cursor-default items-center justify-center bg-white text-violet11'>
          <ChevronDown />
        </Select.ScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
);

const SelectItem = ({
  value = '',
  children,
  className = '',
  disabled = false,
  ...props
}: {
  value: string;
  children: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <Select.Item
      value={value}
      className={twMerge(
        'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none',
        className
      )}
      disabled={disabled}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
        <Check />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
export default SelectDemo;
