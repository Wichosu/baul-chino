import React from 'react';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/src/app/components/Select';
import {
  TestTranslations,
  HandleReadingMatchImageAnswer,
  SelectOptions,
} from '../Test.types';
import { Database } from '@/src/app/types/supabase';
import Image from 'next/image';

type Props = {
  questions: (Omit<
    Database['mock_test']['Tables']['reading_match_image']['Row'],
    'image'
  > & {
    image: {
      image: string | null;
      imageFallback: string | null;
      alt: string | null;
    } | null;
  })[];
  handleReadingMatchImageAnswer: HandleReadingMatchImageAnswer;
  translations: TestTranslations;
};

const SELECTOPTIONS: SelectOptions[] = ['A', 'B', 'C', 'D', 'E', 'F'];

export function ReadingMatchImage({
  questions,
  handleReadingMatchImageAnswer,
  translations,
}: Props) {
  return (
    <section className='mb-8'>
      <h2 className='text-3xl font-medium text-center mb-2'>
        {translations.Titles.readingMatchImage}
      </h2>
      <p className='text-xl text-justify w-fit mx-auto mb-6'>
        {translations.Descriptions.readingMatchImage}
      </p>
      <picture className='block relative w-full h-96 mb-4'>
        <source src={questions[0].image?.image ?? ''} width={'100%'} />
        <Image
          src={questions[0].image?.imageFallback ?? ''}
          alt={
            questions[0].image?.alt ??
            'Error fetching image alt text please refresh the page'
          }
          fill
          className='object-contain'
        />
      </picture>
      <div className='flex flex-col gap-8 mb-4 max-w-2xl mx-auto'>
        {questions.map((question, index) => (
          <article
            key={question.id}
            className='flex items-center justify-between'
          >
            <div className='flex gap-4 items-center'>
              <p className='text-xl'>{question.questionNumber}.</p>
              <div>
                <p>{question.sentencePinyin}</p>
                <p>{question.sentenceHanzi}</p>
              </div>
            </div>
            <SelectRoot
              onValueChange={(value) =>
                handleReadingMatchImageAnswer(
                  value as SelectOptions,
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
      </div>
    </section>
  );
}
