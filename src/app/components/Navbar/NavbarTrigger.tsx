import React from 'react';
import { NavigationMenu } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

type Props = {
  children: string;
};

export function NavbarTrigger({ children }: Props) {
  const triggerClassName = `
    group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 
    text-black text-lg font-medium leading-none outline-none 
    hover:bg-yellow-200 focus:shadow-[0_0_0_2px] 
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
