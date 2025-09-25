import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarContent({ children }: Props) {
  const contentClassName = `
    absolute left-0 top-0 w-full
    bg-yellow-100
    data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft 
    data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft 
    sm:w-auto
  `;

  const ulClassName = `m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3`;

  return (
    <NavigationMenu.Content className={contentClassName}>
      <ul className={ulClassName}>{children}</ul>
    </NavigationMenu.Content>
  );
}
