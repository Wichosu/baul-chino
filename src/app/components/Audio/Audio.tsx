'use client';
import React from 'react';
import { formatSeconds } from '@/src/app/utils/formats';
import AudioSmallScreen from './AudioSmallScreen';
import AudioBigScreen from './AudioBigScreen';
import { useTranslations } from 'next-intl';
import { Translation } from './Audio.types';

type Props = {
  caption: string;
  audioUrl: string;
  children: React.ReactNode;
};

type AudioStatus = 'playing' | 'pause' | 'finished' | 'loading';

export default function Audio({ caption, audioUrl, children }: Props) {
  const audioRef = React.useRef<HTMLAudioElement>(null!);
  const [audioStatus, setAudioStatus] = React.useState<AudioStatus>('loading');
  const [audioTimeTracker, setAudioTimeTracker] = React.useState(0);
  const [audioDuration, setAudioDuration] = React.useState(0);

  const currentTime = formatSeconds(audioTimeTracker, 'mm:ss');
  const duration = formatSeconds(audioDuration, 'mm:ss');

  const t = useTranslations('Components.Audio');

  const translations: Translation = {
    play: t('Play'),
    pause: t('Pause'),
    finished: t('Finished'),
    loading: t('Loading'),
  };

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
      setAudioStatus('pause');
    }

    const currentAudioRef = audioRef.current;

    currentAudioRef.addEventListener('loadedmetadata', onLoadedMetadata);

    if (currentAudioRef.readyState > 0) {
      onLoadedMetadata();
    }

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
      <AudioSmallScreen
        audioDuration={audioDuration}
        audioRef={audioRef}
        audioStatus={audioStatus}
        audioTimeTracker={audioTimeTracker}
        audioUrl={audioUrl}
        caption={caption}
        currentTime={currentTime}
        duration={duration}
        handleButton={handleButton}
        handleKeyRelease={handleKeyRelease}
        handleMouseClickRelease={handleMouseClickRelease}
        onChangeAudioTimeTracker={onChangeAudioTimeTracker}
        translations={translations}
      >
        {children}
      </AudioSmallScreen>
      <AudioBigScreen
        audioDuration={audioDuration}
        audioRef={audioRef}
        audioStatus={audioStatus}
        audioTimeTracker={audioTimeTracker}
        audioUrl={audioUrl}
        caption={caption}
        currentTime={currentTime}
        duration={duration}
        handleButton={handleButton}
        handleKeyRelease={handleKeyRelease}
        handleMouseClickRelease={handleMouseClickRelease}
        handleVolume={handleVolume}
        onChangeAudioTimeTracker={onChangeAudioTimeTracker}
        translations={translations}
      >
        {children}
      </AudioBigScreen>
    </>
  );
}
