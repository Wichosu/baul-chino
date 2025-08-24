'use client';
import React from 'react';
import { Button } from './Button';
import { Volume, Volume1, Volume2, VolumeOff } from 'lucide-react';

type Props = {
  handleVolume: (volume: number) => void;
};

export function VolumeButton({ handleVolume }: Props) {
  const [volume, setVolume] = React.useState(100);
  const prevVolume = React.useRef(100);

  React.useEffect(() => {
    const percentageOfVolume = volume / 100;
    handleVolume(percentageOfVolume);
  }, [volume, handleVolume]);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseInt(event.target.value);

    setVolume(newVolume);
  }

  function handleButton() {
    if (volume > 0) {
      setVolume(0);
      prevVolume.current = volume;
    } else {
      setVolume(prevVolume.current);
    }
  }

  return (
    <div className='group flex gap-2 rounded-md bg-yellow-200'>
      <Button
        type='yellow'
        padding='1'
        margin='none'
        onClick={handleButton}
        className='peer'
      >
        {volume >= 60 && <Volume2 />}
        {volume >= 20 && volume < 60 && <Volume1 />}
        {volume >= 1 && volume < 20 && <Volume />}
        {volume < 1 && <VolumeOff />}
      </Button>
      <input
        id='audioVolume'
        onChange={handleInput}
        value={volume}
        type='range'
        min='0'
        max='100'
        className='
          w-0 -ml-4 opacity-0 rounded cursor-pointer accent-yellow-800
          will-change-auto transition-all delay-100 duration-500 ease-in-out 
          group-hover:w-24 group-hover:ml-0 group-hover:opacity-100
          group-focus:w-24 group-focus:ml-0 group-focus:opacity-100
          peer-focus:w-24 peer-focus:ml-0 peer-focus:opacity-100
          focus:w-24 focus:ml-0 focus:opacity-100 focus:outline-4 focus:outline-yellow-700
        '
      />
      <div />
    </div>
  );
}
