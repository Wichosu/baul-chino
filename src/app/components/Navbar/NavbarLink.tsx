import React from 'react';
import { NavigationMenu } from 'radix-ui';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  current?: boolean;
};

export function NavbarLink({ href, children, current }: Props) {
  return (
    <NavigationMenu.Link
      className='
        flex min-h-11 select-none rounded px-3 py-2 text-lg font-medium leading-none text-black 
        h-full items-center
        no-underline hover:bg-yellow-200
      '
      asChild
    >
      <Link
        href={href}
        aria-current={current ? 'page' : undefined}
        className={current ? 'rounded bg-yellow-200' : undefined}
      >
        {children}
      </Link>
    </NavigationMenu.Link>
  );
}
