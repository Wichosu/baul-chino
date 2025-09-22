import React from 'react';
import { NavigationMenu } from 'radix-ui';

export function NavbarViewport() {
  return (
    <div className='perspective-[2000px] absolute left-0 top-full flex w-full justify-start'>
      <NavigationMenu.Viewport
        className='
          relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full 
          origin-[top_center] overflow-hidden rounded-md bg-white 
          transition-[width,_height] duration-300 
          data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn 
          sm:w-[var(--radix-navigation-menu-viewport-width)]
        '
      />
    </div>
  );
}
