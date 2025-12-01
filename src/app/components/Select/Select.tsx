import React from 'react';
import { SelectRoot } from './SelectRoot';
import { SelectTrigger } from './SelectTrigger';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';

export const SelectDemo = () => (
  <SelectRoot>
    <SelectTrigger ariaLabel='selected demo'>
      Select a yummy fruit
    </SelectTrigger>
    <SelectContent>
      <SelectItem value='apple'>Apple</SelectItem>
      <SelectItem value='banana'>Banana</SelectItem>
      <SelectItem value='blueberry'>Blueberry</SelectItem>
      <SelectItem value='grapes'>Grapes</SelectItem>
      <SelectItem value='pineapple'>Pineapple</SelectItem>
    </SelectContent>
  </SelectRoot>
);

export default SelectDemo;
