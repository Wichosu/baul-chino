'use client';
import React from 'react';
import { AllowedThemeColors } from './Accordion.types';

export const AccordionThemeContext =
  React.createContext<AllowedThemeColors>('yellow');

type Props = {
  children: React.ReactNode;
  theme: AllowedThemeColors;
};

export default function AccordionThemeProvider({
  children,
  theme = 'yellow',
}: Props) {
  return (
    <AccordionThemeContext.Provider value={theme}>
      {children}
    </AccordionThemeContext.Provider>
  );
}
