import React from 'react';
import { AllowedMarginScale, AllowedScale } from './Accordion.types';
import {
  paddingClass,
  roundedClass,
  elevationClass,
  marginXClass,
} from './Accordion.constants';
import { Accordion } from 'radix-ui';

type AccordionContentProps = {
  padding?: AllowedScale;
  marginX?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

export function AccordionContent({
  padding = '2',
  marginX = '1',
  rounded = 'none',
  elevation = 'none',
  children,
}: AccordionContentProps) {
  const contentClassName = `overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`;
  const divClassName = `
    bg-yellow-200 text-black
    ${paddingClass[padding]} ${marginXClass[marginX]} ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  return (
    <Accordion.Content className={contentClassName}>
      <div className={divClassName}>{children}</div>
    </Accordion.Content>
  );
}
