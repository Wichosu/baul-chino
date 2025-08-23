'use client';
import React from 'react';
import { Button, VolumeButton } from '@/src/app/components/Button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { formatSeconds } from '@/src/app/utils/formats';

type Props = {
  // handleCurrentTrack: (audioRef: React.RefObject<HTMLAudioElement>) => void;
  caption: string;
  children: React.ReactNode;
};

type AudioStatus = 'playing' | 'pause' | 'finished';

//THIS COMPONENT MIGHT CHANGE IN THE FUTURE
export default function Audio({
  // handleCurrentTrack,
  caption,
  children,
}: Props) {
  const audioRef = React.useRef<HTMLAudioElement>(null!);
  const [audioStatus, setAudioStatus] = React.useState<AudioStatus>('pause');
  const [audioTimeTracker, setAudioTimeTracker] = React.useState(0);
  const [audioDuration, setAudioDuration] = React.useState(0);

  const currentTime = formatSeconds(audioTimeTracker, 'mm:ss');
  const duration = formatSeconds(audioDuration, 'mm:ss');

  function handleButton() {
    if (audioStatus === 'playing') {
      audioRef.current.pause();
      setAudioStatus('pause');
    }

    if (audioStatus === 'pause') {
      audioRef.current.play();
      setAudioStatus('playing');
    }

    if (audioStatus === 'finished') {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setAudioStatus('playing');
    }
  }

  //Obtain audio duration from metadata
  React.useEffect(() => {
    function onLoadedMetadata() {
      setAudioDuration(audioRef.current.duration);
    }

    const currentAudioRef = audioRef.current;

    currentAudioRef.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      currentAudioRef.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  //Update the current time of the audio track
  React.useEffect(() => {
    const currentTimeAudioTrack = window.setInterval(() => {
      if (audioStatus === 'playing') {
        setAudioTimeTracker(audioRef.current.currentTime);
      }
    }, 1000);

    return () => {
      window.clearInterval(currentTimeAudioTrack);
    };
  }, [audioStatus]);

  function onChangeAudioTimeTracker(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newAudioTimeTracker = parseInt(event.target.value);

    setAudioStatus('pause');
    setAudioTimeTracker(newAudioTimeTracker);

    audioRef.current.pause();
    audioRef.current.currentTime = newAudioTimeTracker;
  }

  function handleMouseClickRelease() {
    setAudioStatus('playing');
    audioRef.current.play();
  }

  function handleKeyRelease(event: React.KeyboardEvent) {
    const key = event.key;
    const validKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

    if (validKeys.includes(key)) {
      setAudioStatus('playing');
      audioRef.current.play();
    }
  }

  //GET VOLUME AND FUNCTION TO HANDLE VOLUME
  function handleVolume(volume: number) {
    audioRef.current.volume = volume;
  }

  //UPDATE AUDIO STATUS WHEN MEDIA HAS ENDED
  React.useEffect(() => {
    function updateAudioStatus() {
      setAudioStatus('finished');
    }

    const currentAudioRef = audioRef.current;

    currentAudioRef.addEventListener('ended', updateAudioStatus);

    return () => {
      currentAudioRef.removeEventListener('ended', updateAudioStatus);
    };
  }, []);

  return (
    <>
      <figure className='md:hidden flex items-center bg-yellow-200 rounded-md w-fit my-2 py-2 px-4'>
        <Button type='yellow' onClick={handleButton} margin='none' padding='1'>
          {audioStatus === 'playing' && <Pause />}
          {audioStatus === 'pause' && <Play />}
          {audioStatus === 'finished' && <RotateCcw />}
        </Button>
        <figcaption className='mx-2'>{caption}</figcaption>
        <time className='mr-2'>
          work on this for small screen
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
          className='accent-yellow-800 mr-2'
        />
        <VolumeButton handleVolume={handleVolume} />
        <audio ref={audioRef} preload='metadata'>
          {children}
        </audio>
      </figure>
      <figure className='hidden md:flex items-center bg-yellow-200 rounded-md w-fit my-2 py-2 px-4'>
        <Button type='yellow' onClick={handleButton} margin='none' padding='1'>
          {audioStatus === 'playing' && <Pause />}
          {audioStatus === 'pause' && <Play />}
          {audioStatus === 'finished' && <RotateCcw />}
        </Button>
        <figcaption className='mx-2'>{caption}</figcaption>
        <time className='mr-2'>
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
          className='accent-yellow-800 mr-2'
        />
        <VolumeButton handleVolume={handleVolume} />
        <audio ref={audioRef} preload='metadata'>
          {children}
        </audio>
      </figure>
    </>
  );
}
