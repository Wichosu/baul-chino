import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarRoot({ children }: Props) {
  return (
    <NavigationMenu.Root className='relative z-10 flex w-full justify-center'>
      {children}
    </NavigationMenu.Root>
  );
}
