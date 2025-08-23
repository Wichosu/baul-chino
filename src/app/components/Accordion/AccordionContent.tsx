'use client';
import React from 'react';
import {
  AllowedMarginScale,
  AllowedScale,
  AllowedThemeColors,
} from './Accordion.types';
import {
  paddingClass,
  roundedClass,
  elevationClass,
  marginXClass,
} from './Accordion.constants';
import { Accordion } from 'radix-ui';
import { AccordionThemeContext } from './AccordionThemeProvider';

type AccordionContentProps = {
  padding?: AllowedScale;
  marginX?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

const themeColors: Record<AllowedThemeColors, string> = {
  blue: 'bg-blue-100 text-black',
  yellow: 'bg-yellow-100 text-black',
};

export function AccordionContent({
  padding = '2',
  marginX = '1',
  rounded = 'none',
  elevation = 'none',
  children,
}: AccordionContentProps) {
  const themeContext = React.useContext(AccordionThemeContext);

  const contentClassName = `overflow-hidden duration-500 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`;

  const divClassName = `
    ${themeColors[themeContext]} ${paddingClass[padding]} ${marginXClass[marginX]} ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  return (
    <Accordion.Content className={contentClassName}>
      <div className={divClassName}>{children}</div>
    </Accordion.Content>
  );
}
