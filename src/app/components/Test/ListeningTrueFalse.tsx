'use client';
import React from 'react';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import { TrueFalseButton } from '@/src/app/components/Button';
import { Database } from '@/src/app/types/supabase';
import { HandleListeningTrueFalseAnswer } from './Test.types';

type Props = {
  questions: Database['mock_test']['Tables']['listening_true_false']['Row'][];
  handleListeningTrueFalseAnswer: HandleListeningTrueFalseAnswer;
};

export function ListeningTrueFalse({
  questions,
  handleListeningTrueFalseAnswer,
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
            <TrueFalseButton
              type='true'
              onClick={() => handleListeningTrueFalseAnswer(true, index)}
            />
            <TrueFalseButton
              type='false'
              onClick={() => handleListeningTrueFalseAnswer(false, index)}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
