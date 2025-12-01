import React from 'react';
import { Database } from '@/src/app/types/supabase';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/src/app/components/Select';
import {
  HandleListeningSelectPhraseAnswer,
  TestTranslations,
} from '../Test.types';

type Props = {
  questions: Database['mock_test']['Tables']['listening_select_phrase']['Row'][];
  handleListeningSelectPhraseAnswers: HandleListeningSelectPhraseAnswer;
  translations: TestTranslations;
};

type SelectOptions = Extract<
  Database['public']['Enums']['letter_range'],
  'A' | 'B' | 'C'
>;

const SELECTOPTIONS: SelectOptions[] = ['A', 'B', 'C'];

export function ListeningSelectPhrase({
  questions,
  handleListeningSelectPhraseAnswers,
  translations,
}: Props) {
  return (
    <section className='mb-8'>
      <h2 className='text-3xl font-medium text-center mb-2'>
        {translations.Titles.listeningSelectPhrase}
      </h2>
      <p className='text-xl text-justify w-fit mx-auto mb-6'>
        {translations.Descriptions.listeningSelectPhrase}
      </p>
      <div className='flex flex-col gap-16 mb-8'>
        {questions.map((question, index) => (
          <article
            key={question.id}
            className='flex flex-col items-center justify-center'
          >
            <picture className='block relative w-full h-16 mb-2'>
              <source src={question.image} width={100} height={100} />
              <Image
                src={question.imageFallback}
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
                caption={question.questionNumber}
              >
                <source src={question.audio} />
              </Audio>
              <SelectRoot
                onValueChange={(
                  answer: Database['public']['Enums']['letter_range']
                ) =>
                  handleListeningSelectPhraseAnswers(
                    answer,
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
      </div>
    </section>
  );
}
