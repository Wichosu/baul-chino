import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarRoot({ children }: Props) {
  return (
    <NavigationMenu.Root className='sticky top-0 z-40 flex w-full justify-center bg-background py-1'>
      {children}
    </NavigationMenu.Root>
  );
}
