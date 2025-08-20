'use client';
import React from 'react';
import Button from '@/src/app/components/Button';
import { Play, Pause } from 'lucide-react';

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
  const [audioTimeTracker, setAudioTimeTracker] = React.useState('0:00');

  function handleIsPlaying() {
    const newIsPlaying = !isPlaying;

    if (newIsPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(newIsPlaying);
  }

  React.useEffect(() => {
    const currentTimeAudioTrack = window.setInterval(() => {
      if (isPlaying) {
        setAudioTimeTracker(audioRef.current.currentTime.toFixed(0));
      }
    }, 1000);

    return () => {
      window.clearInterval(currentTimeAudioTrack);
    };
  }, [isPlaying]);

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
      <time>{audioTimeTracker}</time>
      <audio controls ref={audioRef}>
        {children}
      </audio>
    </figure>
  );
}
