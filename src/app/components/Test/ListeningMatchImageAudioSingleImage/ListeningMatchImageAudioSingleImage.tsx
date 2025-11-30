import React from 'react';
import Image from 'next/image';
import { Database } from '@/src/app/types/supabase';
import Audio from '@/src/app/components/Audio/Audio';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/src/app/components/Select';
import { Test } from '@/src/app/components/Test/Test.types';
import { HandleListeningMatchImageAudioSingleImageAnswer } from '@/src/app/components/Test/Test.types';
import { TestTranslations } from '@/src/app/components/Test/Test.types';

type Props = {
  questions: Test['listeningMatchImageAudioSingleImage'];
  handleListeningMatchImageAudioSingleImageAnswer: HandleListeningMatchImageAudioSingleImageAnswer;
  translations: TestTranslations;
};

type SelectOptions = Database['public']['Enums']['letter_range'];

const SELECTOPTIONS: SelectOptions[] = ['A', 'B', 'C', 'D', 'E', 'F'];

export function ListeningMatchImageAudioSingleImage({
  questions,
  handleListeningMatchImageAudioSingleImageAnswer,
}: Props) {
  return (
    <>
      <section className='flex flex-col gap-8 mb-8'>
        <picture className='block relative w-full h-96'>
          <source src={questions[0]?.image?.image ?? ''} width={'100%'} />
          <Image
            src={questions[0]?.image?.imageFallback ?? ''}
            alt={
              'If I have not place an alt tag here please report this. I do plan on supporting alt tags for screen reader users'
            }
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
            className='object-contain'
          />
        </picture>
        {questions.map((question, index) => (
          <article
            key={question.id}
            className='flex gap-6 items-center justify-center'
          >
            <Audio audioUrl={question.audio} caption={question.questionNumber}>
              <source src={question.audio} />
            </Audio>
            <SelectRoot
              onValueChange={(value) =>
                handleListeningMatchImageAudioSingleImageAnswer(
                  value,
                  index,
                  question.questionNumber
                )
              }
            >
              <SelectTrigger
                ariaLabel={`options for question ${question.questionNumber}`}
              >
                Choose a letter
              </SelectTrigger>
              <SelectContent>
                {SELECTOPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </article>
        ))}
      </section>
    </>
  );
}
