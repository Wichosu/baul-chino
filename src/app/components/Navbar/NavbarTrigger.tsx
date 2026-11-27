import React from 'react';
import { NavigationMenu } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

type Props = {
  children: string;
  active?: boolean;
};

export function NavbarTrigger({ children, active }: Props) {
  const triggerClassName = `
    group flex min-h-11 select-none items-center justify-between gap-0.5 rounded px-3 py-2 
    text-ink text-lg font-medium leading-none 
    hover:bg-brass-tint
    ${active ? 'bg-brass-tint text-brass-deep' : ''}
  `;

  const iconClassName = `
    relative top-px w-4 text-black transition-transform duration-200 ease-in 
    group-data-[state=open]:-rotate-180
  `;

  return (
    <NavigationMenu.Trigger className={triggerClassName}>
      {children} <ChevronDown className={iconClassName} aria-hidden />
    </NavigationMenu.Trigger>
  );
}
