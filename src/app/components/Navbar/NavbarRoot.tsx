import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarRoot({ children }: Props) {
  return (
    <NavigationMenu.Root className='relative z-10 flex w-full justify-center md:sticky md:top-0 md:z-40 md:bg-background md:py-1'>
      {children}
    </NavigationMenu.Root>
  );
}
