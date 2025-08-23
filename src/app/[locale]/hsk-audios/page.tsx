'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Hero } from '@/src/app/components/Hero';
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/app/components/Accordion';
import { Books } from '@/src/app/constants/hskaudiocollection';
import Audio from '@/src/app/components/Audio/Audio';

/**
 *  Audio playing
 * Make audio object to control state
 * handlePlayingAudio() {
 *   if (new audio) stop previous audio and play new one
 * }
 * <Audio handle={handlePlayingAudio} ... />
 *   function Audio({...}) {
 *     <audio onClick={handlePlayingAudio(this audio)}
 *  }
 */
export default function Page() {
  const t = useTranslations('HskAudios');
  // const [isPlaying, setIsPlaying] = React.useState(false);
  // const [currentTrack, setCurrentTrack] = React.useState<
  //   React.RefObject<HTMLAudioElement>
  // >(null!);

  // function handleCurrentTrack(audioRef: React.RefObject<HTMLAudioElement>) {
  //   setCurrentTrack(audioRef);
  // }

  // console.log('CURRENT AUDIO TRACK');
  // console.log({ currentTrack });

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <AccordionRoot type='multiple' width='full'>
        {Books.map((book, index) => (
          <AccordionItem value={`book-${index}`} key={`book-${index}`}>
            <AccordionTrigger>{book.title}</AccordionTrigger>
            <AccordionContent>
              <AccordionRoot type='multiple' width='full'>
                {book.units.map((unit, index) => (
                  <AccordionItem value={`unit-${index}`} key={`unit-${index}`}>
                    <AccordionTrigger>{unit.title}</AccordionTrigger>
                    <AccordionContent>
                      {unit.audioTracks.map((audioTrack, index) => (
                        <Audio caption={audioTrack.title} key={index}>
                          <source src={audioTrack.url} type='audio/mp3' />
                        </Audio>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
}
