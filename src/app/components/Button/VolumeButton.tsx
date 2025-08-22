import React from 'react';
import { Button } from './Button';
import { Volume2 } from 'lucide-react';

export function VolumeButton() {
  return (
    <Button padding='1' margin='3' className='group flex gap-2 pr-4'>
      <Volume2 />
      <input
        id='audioVolume'
        type='range'
        min='0'
        max='100'
        className='w-0 transition-[width] duration-1000 -ml-4 opacity-0 group-hover:w-24 group-hover:ml-0 group-hover:opacity-100'
      />
    </Button>
  );
}
