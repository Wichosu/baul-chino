'use client';
import React from 'react';
import Image from 'next/image';
import { Database } from '@/src/app/types/supabase';
import { HandleReadingTrueFalseAnswer, TestTranslations } from '../Test.types';
import { ReadingTrueFalseButtons } from './ReadingTrueFalseButtons';

type Props = {
  questions: Database['mock_test']['Tables']['reading_true_false']['Row'][];
  handleReadingTrueFalseAnswer: HandleReadingTrueFalseAnswer;
  translations: TestTranslations;
};

export function ReadingTrueFalse({
  questions,
  handleReadingTrueFalseAnswer,
  translations,
}: Props) {
  return (
    <section className='mb-12'>
      <h2 className='text-3xl font-medium text-center mb-2'>
        {translations.Titles.readingTrueFalse}
      </h2>
      <p className='text-xl text-justify w-fit mx-auto mb-6'>
        {translations.Descriptions.readingTrueFalse}
      </p>
      {questions?.map((question, index) => (
        <article
          key={question.id}
          className='flex flex-wrap gap-8 lg:gap-16 items-center justify-center'
        >
          <div className='text-xl'>{question.questionNumber}</div>
          <picture className='relative w-96 h-40'>
            <source srcSet={question.image} width={'100%'} />
            <Image
              src={question.imageFallback}
              alt={
                question.alt ??
                'Error fetching image alt text please refresh the page'
              }
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-contain'
            />
          </picture>
          <div>
            <ReadingTrueFalseButtons
              translations={translations}
              handleReadingTrueFalseAnswer={handleReadingTrueFalseAnswer}
              index={index}
              questionNumber={question.questionNumber}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
