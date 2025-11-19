'use client';
import React from 'react';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import { Button } from '@/src/app/components/Button';
import { Database } from '@/src/app/types/supabase';
import { HandleListeningTrueFalseAnswer, TestTranslations } from './Test.types';
import { ListeningTrueFalseButtons } from './ListeningTrueFalseButtons';

type Props = {
  questions: Database['mock_test']['Tables']['listening_true_false']['Row'][];
  handleListeningTrueFalseAnswer: HandleListeningTrueFalseAnswer;
  listeningTrueFalseEvaluation: boolean[];
  translations: TestTranslations;
};

export function ListeningTrueFalse({
  questions,
  handleListeningTrueFalseAnswer,
  listeningTrueFalseEvaluation,
  translations,
}: Props) {
  return (
    <section>
      {questions?.map((question, index) => (
        <article
          key={question.id}
          className='flex flex-wrap gap-4 lg:gap-12 items-center justify-center'
        >
          <picture className='relative w-32 h-32'>
            <source srcSet={question.image} width={'100%'} />
            <Image
              src={question.imgFallback}
              alt={
                question.alt ??
                'Error fetching image alt text please refresh the page'
              }
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-contain'
            />
          </picture>
          <Audio
            audioUrl={question.audio}
            caption={`${question.questionNumber}.-`}
          >
            <source src={question.audio} />
          </Audio>
          <div>
            <ListeningTrueFalseButtons
              translations={translations}
              handleListeningTrueFalseAnswer={handleListeningTrueFalseAnswer}
              index={index}
            />
          </div>
        </article>
      ))}
      <div className='w-fit mx-auto'>
        <Button type='yellow'>{translations.showAnswers}</Button>
      </div>
    </section>
  );
}
