import React from 'react';
import { Accordion } from 'radix-ui';
import { AllowedScale, AllowedMarginScale } from './Accordion.types';
import {
  paddingClass,
  marginYClass,
  marginXClass,
  roundedClass,
  elevationClass,
} from './Accordion.constants';

type AccordionItemProps = {
  value: string;
  padding?: AllowedScale;
  marginX?: AllowedMarginScale;
  marginY?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

export function AccordionItem({
  value,
  padding = 'none',
  marginY = 'none',
  marginX = 'none',
  rounded = 'none',
  elevation = 'none',
  children,
  ...props
}: AccordionItemProps) {
  const className = `
    ${paddingClass[padding]}
    ${marginXClass[marginX]} ${marginYClass[marginY]}
    ${roundedClass[rounded]} ${elevationClass[elevation]}
  `;

  return (
    <Accordion.Item value={value} className={className} {...props}>
      {children}
    </Accordion.Item>
  );
}
