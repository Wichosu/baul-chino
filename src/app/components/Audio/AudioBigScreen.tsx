import React from 'react';
import { Button, VolumeButton } from '@/src/app/components/Button';
import { Play, Pause, RotateCcw, LoaderCircle } from 'lucide-react';

type AudioStatus = 'playing' | 'pause' | 'finished' | 'loading';

type Props = {
  caption: string;
  currentTime: string;
  duration: string;
  handleButton: () => void;
  handleVolume: (volume: number) => void;
  audioStatus: AudioStatus;
  audioDuration: number;
  audioTimeTracker: number;
  onChangeAudioTimeTracker: (
    element: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleMouseClickRelease: () => void;
  handleKeyRelease: (event: React.KeyboardEvent) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  children: React.ReactNode;
};

export default function AudioBigScreen({
  handleButton,
  audioStatus,
  caption,
  currentTime,
  duration,
  audioDuration,
  audioTimeTracker,
  onChangeAudioTimeTracker,
  handleMouseClickRelease,
  handleKeyRelease,
  handleVolume,
  audioRef,
  children,
}: Props) {
  return (
    <figure className='hidden md:flex items-center bg-yellow-200 rounded-md w-fit my-2 py-2 px-4'>
      <Button type='yellow' onClick={handleButton} margin='none' padding='1'>
        {audioStatus === 'loading' && <LoaderCircle className='animate-spin' />}
        {audioStatus === 'playing' && <Pause />}
        {audioStatus === 'pause' && <Play />}
        {audioStatus === 'finished' && <RotateCcw />}
      </Button>
      <figcaption className='mx-2'>{caption}</figcaption>
      <time className='w-24 mr-2'>
        {currentTime} / {duration}
      </time>
      <input
        id='audioTrack'
        type='range'
        min='0'
        max={audioDuration}
        value={audioTimeTracker}
        onChange={onChangeAudioTimeTracker}
        onMouseUp={handleMouseClickRelease}
        onKeyUp={handleKeyRelease}
        className='accent-yellow-800 rounded focus:outline-4 focus:outline-yellow-700 mr-2'
      />
      <VolumeButton handleVolume={handleVolume} />
      <audio ref={audioRef} preload='metadata'>
        {children}
      </audio>
    </figure>
  );
}
