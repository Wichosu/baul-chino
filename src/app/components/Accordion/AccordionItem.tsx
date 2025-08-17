import React from 'react';
import { Accordion } from 'radix-ui';
import { AllowedScale, AllowedMarginScale } from './Accordion.types';
import {
  paddingClass,
  marginClass,
  roundedClass,
  elevationClass,
} from './Accordion.constants';

type AccordionItemProps = {
  value: string;
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

export function AccordionItem({
  value,
  padding = 'none',
  margin = '1',
  rounded = 'none',
  elevation = 'none',
  children,
  ...props
}: AccordionItemProps) {
  const className = `${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Item value={value} className={className} {...props}>
      {children}
    </Accordion.Item>
  );
}
