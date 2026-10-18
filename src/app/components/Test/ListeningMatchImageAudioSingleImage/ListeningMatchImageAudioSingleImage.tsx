'use client';
import React from 'react';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import { LetterSelect, LETTERS_ABCDEF } from '../LetterSelect';
import { QuestionSection } from '../QuestionSection';
import { Test } from '@/src/app/components/Test/Test.types';
import { HandleListeningMatchImageAudioSingleImageAnswer } from '@/src/app/components/Test/Test.types';
import { useTranslations } from 'next-intl';

type Props = {
  questions: Test['listeningMatchImageAudioSingleImage'];
  handleListeningMatchImageAudioSingleImageAnswer: HandleListeningMatchImageAudioSingleImageAnswer;
};

export function ListeningMatchImageAudioSingleImage({
  questions,
  handleListeningMatchImageAudioSingleImageAnswer,
}: Props) {
  const t = useTranslations('Test');

  return (
    <QuestionSection
      title={t('Titles.listeningMatchImageAudioSingleImage')}
      description={t('Descriptions.listeningMatchImageAudioSingleImage')}
    >
      <picture className='block relative w-full h-96 mb-4'>
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
      <div className='flex flex-col gap-8'>
        {questions.map((question, index) => (
          <article
            key={question.id}
            className='flex flex-wrap gap-6 items-center justify-center'
          >
            <Audio
              audioUrl={question.audio}
              caption={question.questionNumber}
            />
            <LetterSelect
              questionNumber={question.questionNumber}
              options={LETTERS_ABCDEF}
              onValueChange={(value) =>
                handleListeningMatchImageAudioSingleImageAnswer(
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
