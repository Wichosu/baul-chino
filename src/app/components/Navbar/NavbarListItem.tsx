import React from 'react';
import { NavigationMenu } from 'radix-ui';

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  forwardedRef?: React.RefObject<HTMLAnchorElement>;
};

export function NavbarListItem({ children, title, forwardedRef, href }: Props) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className='
            block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none
            transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7
          '
          href={href}
          ref={forwardedRef}
        >
          <div className='mb-[5px] font-medium leading-[1.2] text-violet12'>
            {title}
          </div>
          <p className='leading-[1.4] text-mauve11'>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
}
