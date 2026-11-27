import React from 'react';
import { NavigationMenu } from 'radix-ui';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  title: string;
  href: string;
  current?: boolean;
  forwardedRef?: React.RefObject<HTMLAnchorElement>;
};

export function NavbarListItem({
  children,
  title,
  forwardedRef,
  href,
  current,
}: Props) {
  const linkClassName = `
    block select-none rounded-md p-3 leading-none no-underline
    transition-colors 
    hover:bg-brass-tint
    ${current ? 'bg-brass-tint text-brass-deep' : ''}
`;

  const titleClassName = `
    mb-1 font-medium leading-6 text-ink
  `;

  const descriptionClassName = `
    leading-6 text-ink-2
  `;

  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={linkClassName}
          href={href}
          ref={forwardedRef}
          aria-current={current ? 'page' : undefined}
        >
          <div className={titleClassName}>{title}</div>
          {children && <p className={descriptionClassName}>{children}</p>}
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}
