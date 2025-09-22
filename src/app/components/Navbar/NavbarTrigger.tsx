import React from 'react';
import { NavigationMenu } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

type Props = {
  children: string;
};

export function NavbarTrigger({ children }: Props) {
  const triggerClassName = `
    group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 
    text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 
    focus:shadow-[0_0_0_2px] focus:shadow-violet7
  `;

  const iconClassName = `
    relative top-px text-violet10 transition-transform duration-[250] ease-in 
    group-data-[state=open]:-rotate-180
  `;

  return (
    <NavigationMenu.Trigger className={triggerClassName}>
      {children} <ChevronDown className={iconClassName} aria-hidden />
    </NavigationMenu.Trigger>
  );
}
