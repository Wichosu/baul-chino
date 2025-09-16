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
  marginYClass,
  marginXClass,
} from './Accordion.constants';
import { Accordion } from 'radix-ui';
import { AccordionThemeContext } from './AccordionThemeProvider';

type AccordionContentProps = {
  padding?: AllowedScale;
  marginY?: AllowedMarginScale;
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
  padding = 'none',
  marginY = 'none',
  marginX = 'none',
  rounded = 'none',
  elevation = 'none',
  children,
}: AccordionContentProps) {
  const themeContext = React.useContext(AccordionThemeContext);

  const contentClassName = `overflow-hidden duration-500 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`;

  const divClassName = `
    ${themeColors[themeContext]} ${paddingClass[padding]} 
    ${marginXClass[marginX]} ${marginYClass[marginY]}
    ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  return (
    <Accordion.Content className={contentClassName} asChild>
      <dd>
        <div className={divClassName}>{children}</div>
      </dd>
    </Accordion.Content>
  );
}
