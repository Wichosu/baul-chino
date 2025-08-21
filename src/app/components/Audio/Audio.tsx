'use client';
import React from 'react';
import Button from '@/src/app/components/Button';
import { Play, Pause } from 'lucide-react';
import { formatSeconds } from '@/src/app/utils/formats';

type Props = {
  // handleCurrentTrack: (audioRef: React.RefObject<HTMLAudioElement>) => void;
  caption: string;
  children: React.ReactNode;
};

//THIS COMPONENT MIGHT CHANGE IN THE FUTURE
export default function Audio({
  // handleCurrentTrack,
  caption,
  children,
}: Props) {
  const audioRef = React.useRef<HTMLAudioElement>(null!);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioTimeTracker, setAudioTimeTracker] = React.useState(0);
  const [audioDuration, setAudioDuration] = React.useState(0);

  const currentTime = formatSeconds(audioTimeTracker, 'mm:ss');
  const duration = formatSeconds(audioDuration, 'mm:ss');

  function handleIsPlaying() {
    const newIsPlaying = !isPlaying;

    if (newIsPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(newIsPlaying);
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
      if (isPlaying) {
        setAudioTimeTracker(audioRef.current.currentTime);
      }
    }, 1000);

    return () => {
      window.clearInterval(currentTimeAudioTrack);
    };
  }, [isPlaying]);

  function onChangeAudioTimeTracker(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setAudioTimeTracker(parseInt(event.target.value));
  }

  // function handleOnClick() {
  //   console.log('clicked audio');
  //   handleCurrentTrack(audioRef);
  // }

  return (
    <figure className='flex items-center'>
      <Button onClick={handleIsPlaying} margin='none' padding='1'>
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <figcaption>{caption}</figcaption>
      <time className='mx-2 w-24'>
        {currentTime} / {duration}
      </time>
      <input
        type='range'
        min='0'
        max={audioDuration}
        value={audioTimeTracker}
        onChange={onChangeAudioTimeTracker}
      />
      <audio controls ref={audioRef} preload='metadata'>
        {children}
      </audio>
    </figure>
  );
}
