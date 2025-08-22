import React from 'react';
import { Button } from './Button';
import { Volume2 } from 'lucide-react';

export function VolumeButton() {
  return (
    <Button padding='1' margin='3'>
      <div className='flex gap-2'>
        <Volume2 />
        <input
          id='audioVolume'
          type='range'
          min='0'
          max='100'
          className='hidden'
        />
      </div>
    </Button>
  );
}
