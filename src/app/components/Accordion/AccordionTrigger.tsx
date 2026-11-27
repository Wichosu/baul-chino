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
  blue: 'bg-brass-deep hover:bg-[#553409] focus:bg-[#553409] text-white',
  yellow:
    'bg-brass-deep hover:bg-[#553409] focus:bg-[#553409] text-white',
  // quiet: for nested or secondary groups, so a dark bar means "this is the
  // level above", not "every row"
  quiet: 'bg-brass-tint text-ink hover:bg-[#e9dbc0] focus:bg-[#e9dbc0]',
};

export function AccordionTrigger({
  padding = '1',
  rounded = '1',
  elevation = '1',
  children,
}: AccordionTriggerProps) {
  const themeContext = React.useContext(AccordionThemeContext);

  const className = `
    group flex justify-between w-full cursor-pointer transition-colors 
    text-xl
    ${themeColors[themeContext]} ${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  return (
    <Accordion.Header asChild>
      <dt>
        <Accordion.Trigger className={className}>
          {children}
          <ChevronDown
            aria-hidden
            className='transition-transform duration-200 ease-out group-data-[state=open]:rotate-180'
          />{' '}
        </Accordion.Trigger>
      </dt>
    </Accordion.Header>
  );
}
