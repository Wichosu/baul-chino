'use client';
import React from 'react';
import { ListeningTrueFalse } from './ListeningTrueFalse';
import { Button } from '@/src/app/components/Button';
import {
  QuestionType,
  Test,
  HandleListeningTrueFalseAnswer,
  TestTranslations,
} from './Test.types';

type Props = {
  test: Test;
  translations: TestTranslations;
};

export function TestClient({ test, translations }: Props) {
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

  //evaluate user answers with test answers
  //if true it means correct answer, if false it means incorrect answer
  const listeningTrueFalseEvaluation = test.listeningTrueFalse.map(
    (question, index) => question.answer === listeningTrueFalseAnswers[index]
  );

  console.log({ listeningTrueFalseAnswers });
  console.log({ listeningTrueFalseEvaluation });

  return (
    <>
      {currentQuestionType === 'listeningTrueFalse' && (
        <ListeningTrueFalse
          questions={test.listeningTrueFalse}
          handleListeningTrueFalseAnswer={handleListeningTrueFalseAnswer}
          listeningTrueFalseEvaluation={listeningTrueFalseEvaluation}
          translations={translations}
        />
      )}
      <div className='w-fit mx-auto'>
        <Button type='yellow' className='md:mr-20'>
          {translations.previous}
        </Button>
        <Button type='yellow'>{translations.next}</Button>
      </div>
    </>
  );
}
