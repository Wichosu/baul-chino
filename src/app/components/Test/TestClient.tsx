'use client';
import React from 'react';
import { ListeningTrueFalse } from './ListeningTrueFalse';
import { Button } from '@/src/app/components/Button';
import {
  QuestionType,
  Test,
  HandleListeningTrueFalseAnswer,
} from './Test.types';

type Props = {
  test: Test;
};

export function TestClient({ test }: Props) {
  const [currentQuestionType, setCurrentQuestionType] =
    React.useState<QuestionType>(test.flowOrder[0]);

  // const [clientAnswers, setClientAnswers] = React.useState<ClientAnswers>({
  //   listeningTrueFalse: [],
  // });

  const [listeningTrueFalseAnswers, setListeningTrueFalseAnswers] =
    React.useState<boolean[]>(
      Array.from({ length: test.listeningTrueFalse.length })
    );

  const handleListeningTrueFalseAnswer: HandleListeningTrueFalseAnswer = (
    answer,
    index
  ) => {
    const newListeningTrueFalseAnswers = [...listeningTrueFalseAnswers];

    newListeningTrueFalseAnswers[index] = answer;

    setListeningTrueFalseAnswers(newListeningTrueFalseAnswers);
  };

  console.log(listeningTrueFalseAnswers);

  return (
    <>
      {currentQuestionType === 'listeningTrueFalse' && (
        <ListeningTrueFalse
          questions={test.listeningTrueFalse}
          handleListeningTrueFalseAnswer={handleListeningTrueFalseAnswer}
        />
      )}
      <div className='w-fit mx-auto'>
        <Button type='yellow' className='first-letter:uppercase mr-20'>
          previous
        </Button>
        <Button type='yellow' className='first-letter:uppercase'>
          next
        </Button>
      </div>
    </>
  );
}
