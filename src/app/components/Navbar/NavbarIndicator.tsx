import React from 'react';
import { NavigationMenu } from 'radix-ui';

export function NavbarIndicator() {
  return (
    <NavigationMenu.Indicator
      className='
        top-full z-10 flex h-2.5 items-end justify-center overflow-hidden
        transition-[width,transform_250ms_ease] 
        data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn
      '
    >
      <div className='relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white' />
    </NavigationMenu.Indicator>
  );
}
