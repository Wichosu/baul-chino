import React from 'react';
import { NavigationMenu } from 'radix-ui';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  forwardedRef?: React.RefObject<HTMLAnchorElement>;
};

export function NavbarListItem({ children, title, forwardedRef, href }: Props) {
  const linkClassName = `
    block select-none rounded-md p-3 leading-none no-underline outline-none
    transition-colors 
    hover:bg-yellow-200 
    focus:shadow-[0_0_0_3px] focus:shadow-yellow-900
`;

  const titleClassName = `
    mb-1 font-medium leading-6 text-black
  `;

  const descriptionClassName = `
    leading-6 text-black
  `;

  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link className={linkClassName} href={href} ref={forwardedRef}>
          <div className={titleClassName}>{title}</div>
          <p className={descriptionClassName}>{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}
