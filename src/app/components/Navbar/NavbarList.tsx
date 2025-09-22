import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarList({ children }: Props) {
  return (
    <NavigationMenu.List
      className='
        m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4
      '
    >
      {children}
    </NavigationMenu.List>
  );
}
