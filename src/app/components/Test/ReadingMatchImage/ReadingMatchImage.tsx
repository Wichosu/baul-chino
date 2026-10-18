'use client';
import React from 'react';
import { LetterSelect, LETTERS_ABCDEF } from '../LetterSelect';
import { QuestionSection } from '../QuestionSection';
import {
  HandleReadingMatchImageAnswer,
} from '../Test.types';
import { Database } from '@/src/app/types/supabase';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
};

export function ReadingMatchImage({
  questions,
  handleReadingMatchImageAnswer,
}: Props) {
  const t = useTranslations('Test');

  return (
    <QuestionSection
      title={t('Titles.readingMatchImage')}
      description={t('Descriptions.readingMatchImage')}
    >
      <picture className='block relative w-full h-96 mb-4'>
        <source src={questions[0]?.image?.image ?? ''} width={'100%'} />
        <Image
          src={questions[0]?.image?.imageFallback ?? ''}
          alt={
            questions[0]?.image?.alt ??
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
            <LetterSelect
              questionNumber={question.questionNumber}
              options={LETTERS_ABCDEF}
              onValueChange={(value) =>
                handleReadingMatchImageAnswer(
                  value,
                  index,
                  question.questionNumber
                )
              }
            />
          </article>
        ))}
      </div>
    </QuestionSection>
  );
}
