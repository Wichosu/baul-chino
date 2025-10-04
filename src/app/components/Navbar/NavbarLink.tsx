import React from 'react';
import { NavigationMenu } from 'radix-ui';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function NavbarLink({ href, children }: Props) {
  return (
    <NavigationMenu.Link
      className='
        flex select-none rounded px-3 py-2 text-lg font-medium leading-none text-black 
        h-full items-center
        no-underline outline-none hover:bg-yellow-200 focus:shadow-[0_0_0_4px] focus:shadow-yellow-900
      '
      asChild
    >
      <Link href={href}>{children}</Link>
    </NavigationMenu.Link>
  );
}
