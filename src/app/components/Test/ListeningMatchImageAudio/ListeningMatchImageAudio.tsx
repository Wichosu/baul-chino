import React from 'react';
import { Database } from '@/src/app/types/supabase';
import {
  HandleListeningMatchImageAudioAnswer,
  TestTranslations,
} from '@/src/app/components/Test/Test.types';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/src/app/components/Select';

type Props = {
  questions: Database['mock_test']['Tables']['listening_match_image_audio']['Row'][];
  handleListeningMatchImageAudioAnswer: HandleListeningMatchImageAudioAnswer;
  translations: TestTranslations;
};

type SelectOptions = Extract<
  Database['public']['Enums']['letter_range'],
  'A' | 'B' | 'C'
>;

const SELECTOPTIONS: SelectOptions[] = ['A', 'B', 'C'];

export function ListeningMatchImageAudio({
  questions,
  handleListeningMatchImageAudioAnswer,
  translations,
}: Props) {
  return (
    <section className='flex flex-col gap-16'>
      {questions.map((question, index) => (
        <article key={question.id}>
          <picture className='block relative w-full h-32 mb-2'>
            <source src={question.img} width={'100%'} />
            <Image
              src={question.imgFallback}
              alt={
                'If I have not place an alt tag here please report this. I do plan on supporting alt tags for screen reader users'
              }
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-contain'
            />
          </picture>
          <div className='flex flex-wrap gap-6 md:gap-12 justify-center items-center'>
            <Audio
              audioUrl={question.audio}
              caption={`${question.questionNumber}.-`}
            >
              <source src={question.audio} />
            </Audio>
            <SelectRoot
              onValueChange={(value) =>
                handleListeningMatchImageAudioAnswer(
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
          </div>
        </article>
      ))}
    </section>
  );
}
