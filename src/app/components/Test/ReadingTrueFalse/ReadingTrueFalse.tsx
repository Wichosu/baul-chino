'use client';
import React from 'react';
import Image from 'next/image';
import { Database } from '@/src/app/types/supabase';
import { HandleReadingTrueFalseAnswer } from '../Test.types';
import { TrueFalseButtons } from '../TrueFalseButtons';
import { QuestionSection } from '../QuestionSection';
import { useTranslations } from 'next-intl';

type Props = {
  questions: Database['mock_test']['Tables']['reading_true_false']['Row'][];
  handleReadingTrueFalseAnswer: HandleReadingTrueFalseAnswer;
};

export function ReadingTrueFalse({
  questions,
  handleReadingTrueFalseAnswer,
}: Props) {
  const t = useTranslations('Test');

  return (
    <QuestionSection
      title={t('Titles.readingTrueFalse')}
      description={t('Descriptions.readingTrueFalse')}
      className='mb-12'
    >
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
            <TrueFalseButtons
              onAnswer={(answer) =>
                handleReadingTrueFalseAnswer(
                  answer,
                  index,
                  question.questionNumber
                )
              }
            />
          </div>
        </article>
      ))}
    </QuestionSection>
  );
}
