import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
};

export function NavbarItem({ children }: Props) {
  return <NavigationMenu.Item>{children}</NavigationMenu.Item>;
}
