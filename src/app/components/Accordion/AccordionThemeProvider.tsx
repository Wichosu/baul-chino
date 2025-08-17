'use client';
import React from 'react';

export const AccordionThemeContext = React.createContext('');

type Props = {
  children: React.ReactNode;
  theme: 'yellow' | 'blue';
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
