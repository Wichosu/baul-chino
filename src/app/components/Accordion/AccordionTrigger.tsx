'use client';
import React from 'react';
import { Accordion } from 'radix-ui';
import { AllowedScale, AllowedMarginScale } from './Accordion.types';
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

export function AccordionTrigger({
  padding = '1',
  rounded = '1',
  elevation = '1',
  children,
}: AccordionTriggerProps) {
  const themeContext = React.useContext(AccordionThemeContext);

  console.log('This is my theme context in trigger', themeContext);

  const className = `
    group flex justify-between w-full cursor-pointer transition-colors focus:outline-4 
    ${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  const classColorTheme = `text-white bg-yellow-800 hover:bg-yellow-950 focus:bg-yellow-950 focus:outline-yellow-700`;

  return (
    <Accordion.Header>
      <Accordion.Trigger className={`${className} ${classColorTheme}`}>
        {children}{' '}
        <ChevronDown
          aria-hidden
          className='transition-transform duration-200 ease-out group-data-[state=open]:rotate-180'
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}
