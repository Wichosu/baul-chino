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
      <div className='flex flex-wrap gap-8 mb-4'>
        {questions.map((question, index) => (
          <article key={question.id}>
            <p className='text-xl'>{question.questionNumber}</p>
            <picture
              className='block relative w-full h-32 mb-2'
              key={question.id}
            >
              <source src={question.image?.image ?? ''} width={'100%'} />
              <Image
                src={question.image?.imageFallback ?? ''}
                alt={
                  question.image?.alt ??
                  'Error fetching image alt text please refresh the page'
                }
                fill
                className='object-contain'
              />
            </picture>
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
