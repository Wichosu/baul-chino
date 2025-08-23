import React from 'react';
import { Accordion } from 'radix-ui';
import {
  AllowedMarginScale,
  AllowedScale,
  AllowedThemeColors,
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
import {
  AccordionMultipleProps,
  AccordionSingleProps,
} from '@radix-ui/react-accordion';

type AccordionRootProps = {
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  width?: AllowedWidthScale;
  theme?: AllowedThemeColors;
  children: React.ReactNode;
} & (AccordionSingleProps | AccordionMultipleProps);

export function AccordionRoot({
  padding = 'none',
  margin = 'center',
  rounded = 'none',
  elevation = 'none',
  width = 'full',
  theme = 'yellow',
  children,
  ...props
}: AccordionRootProps) {
  const className = `${widthClass[width]} ${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <AccordionThemeProvider theme={theme}>
      <Accordion.Root className={className} {...props}>
        {children}
      </Accordion.Root>
    </AccordionThemeProvider>
  );
}
