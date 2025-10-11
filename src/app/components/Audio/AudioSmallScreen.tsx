import React from 'react';
import { Button, DownloadButton } from '../Button';
import { LoaderCircle, Pause, Play, RotateCcw } from 'lucide-react';

type AudioStatus = 'playing' | 'pause' | 'finished' | 'loading';

type Props = {
  caption: string;
  currentTime: string;
  duration: string;
  handleButton: () => void;
  audioStatus: AudioStatus;
  audioDuration: number;
  audioTimeTracker: number;
  audioUrl: string;
  onChangeAudioTimeTracker: (
    element: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleMouseClickRelease: () => void;
  handleKeyRelease: (event: React.KeyboardEvent) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  children: React.ReactNode;
};

export default function AudioSmallScreen({
  caption,
  currentTime,
  duration,
  handleButton,
  audioStatus,
  audioDuration,
  audioTimeTracker,
  audioUrl,
  onChangeAudioTimeTracker,
  handleMouseClickRelease,
  handleKeyRelease,
  audioRef,
  children,
}: Props) {
  return (
    <figure className='md:hidden flex flex-col bg-yellow-200 rounded-md w-fit my-2 py-2 px-2'>
      <div className='flex'>
        <figcaption className='mr-2'>{caption}</figcaption>
        <time>
          {currentTime} / {duration}
        </time>
      </div>
      <div className='flex items-center'>
        <Button type='yellow' onClick={handleButton} margin='none' padding='1'>
          {audioStatus === 'loading' && (
            <LoaderCircle className='animate-spin' />
          )}
          {audioStatus === 'playing' && <Pause />}
          {audioStatus === 'pause' && <Play />}
          {audioStatus === 'finished' && <RotateCcw />}
        </Button>
        <input
          id='audioTrack'
          type='range'
          min='0'
          max={audioDuration}
          value={audioTimeTracker}
          onChange={onChangeAudioTimeTracker}
          onMouseUp={handleMouseClickRelease}
          onKeyUp={handleKeyRelease}
          className='accent-yellow-800 mx-2'
        />
        <DownloadButton url={audioUrl} filename={caption} />
      </div>
      <audio ref={audioRef} preload='metadata'>
        {children}
      </audio>
    </figure>
  );
}
