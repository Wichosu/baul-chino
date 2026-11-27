import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarList({ children }: Props) {
  return (
    <NavigationMenu.List
      className='
        m-0 hidden flex-wrap list-none rounded-md border border-line bg-surface p-1 shadow-sm lg:flex
      '
    >
      {children}
    </NavigationMenu.List>
  );
}
