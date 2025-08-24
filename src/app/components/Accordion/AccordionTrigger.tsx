'use client';
import React from 'react';
import { Accordion } from 'radix-ui';
import {
  AllowedScale,
  AllowedMarginScale,
  AllowedThemeColors,
} from './Accordion.types';
import {
  paddingClass,
  roundedClass,
  elevationClass,
} from './Accordion.constants';
import { ChevronDown } from 'lucide-react';
import { AccordionThemeContext } from './AccordionThemeProvider';

type AccordionTriggerProps = {
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: string;
};

const themeColors: Record<AllowedThemeColors, string> = {
  blue: 'bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 focus:outline-blue-500 text-white',
  yellow:
    'bg-yellow-800 hover:bg-yellow-950 focus:bg-yellow-950 focus:outline-yellow-700 text-white',
};

export function AccordionTrigger({
  padding = '1',
  rounded = '1',
  elevation = '1',
  children,
}: AccordionTriggerProps) {
  const themeContext = React.useContext(AccordionThemeContext);

  const className = `
    group flex justify-between w-full cursor-pointer transition-colors focus:outline-4 
    ${themeColors[themeContext]} ${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  return (
    <Accordion.Header>
      <Accordion.Trigger className={className}>
        {children}{' '}
        <ChevronDown
          aria-hidden
          className='transition-transform duration-200 ease-out group-data-[state=open]:rotate-180'
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}
