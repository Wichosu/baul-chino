import * as React from 'react';
// import {
//   CheckIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
// } from '@radix-ui/react-icons';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SelectRoot } from './SelectRoot';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';
import { SelectIcon } from './SelectIcon';
import { SelectPortal } from './SelectPortal';
import { SelectContent } from './SelectContent';
import { SelectScrollUpButton } from './SelectScrollUpButton';
import { SelectViewport } from './SelectViewport';
import { SelectGroup } from './SelectGroup';
import { SelectLabel } from './SelectLabel';
import { SelectSeparator } from './SelectSeparator';
import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectItem } from './SelectItem';

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
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value='aubergine'>Aubergine</SelectItem>
            <SelectItem value='broccoli'>Broccoli</SelectItem>
            <SelectItem value='carrot' disabled>
              Carrot
            </SelectItem>
            <SelectItem value='courgette'>Courgette</SelectItem>
            <SelectItem value='leek'>Leek</SelectItem>
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Meat</SelectLabel>
            <SelectItem value='beef'>Beef</SelectItem>
            <SelectItem value='chicken'>Chicken</SelectItem>
            <SelectItem value='lamb'>Lamb</SelectItem>
            <SelectItem value='pork'>Pork</SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDown />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
);

export default SelectDemo;
