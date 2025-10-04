import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarList({ children }: Props) {
  return (
    <NavigationMenu.List
      className='
        m-0 flex flex-wrap list-none rounded-md bg-yellow-100 p-1 shadow-md
      '
    >
      {children}
    </NavigationMenu.List>
  );
}
