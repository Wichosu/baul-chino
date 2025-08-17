import React from 'react';
import { Accordion } from 'radix-ui';
import {
  AllowedMarginScale,
  AllowedScale,
  AllowedWidthScale,
} from './Accordion.types';
import {
  widthClass,
  paddingClass,
  marginClass,
  elevationClass,
  roundedClass,
} from './Accordion.constants';
import AccordionThemeProvider from './AccordionThemeProvider';

type AccordionRootProps = {
  type?: 'single' | 'multiple';
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  width?: AllowedWidthScale;
  children: React.ReactNode;
};

export function AccordionRoot({
  type = 'single',
  padding = 'none',
  margin = 'center',
  rounded = 'none',
  elevation = 'none',
  width = 'full',
  children,
  ...props
}: AccordionRootProps) {
  const className = `${widthClass[width]} ${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <AccordionThemeProvider theme='yellow'>
      <Accordion.Root type={type} className={className} {...props} collapsible>
        {children}
      </Accordion.Root>
    </AccordionThemeProvider>
  );
}
