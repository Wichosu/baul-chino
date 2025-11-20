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
import { Check, X } from 'lucide-react';

type Props = {
  test: Test;
  translations: TestTranslations;
};

export function TestClient({ test, translations }: Props) {
  const [currentQuestionType, setCurrentQuestionType] =
    React.useState<QuestionType>(test.flowOrder[0]);

  const [showAnswers, setShowAnswers] = React.useState(false);

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

  const totalQuestions = test.listeningTrueFalse.length;
  let totalScore = 0;

  listeningTrueFalseEvaluation.map((evaluation) => {
    if (evaluation === true) totalScore += 1;
  });

  console.log({ listeningTrueFalseAnswers });
  console.log({ listeningTrueFalseEvaluation });

  return (
    <>
      {currentQuestionType === 'listeningTrueFalse' && (
        <ListeningTrueFalse
          questions={test.listeningTrueFalse}
          handleListeningTrueFalseAnswer={handleListeningTrueFalseAnswer}
          translations={translations}
        />
      )}
      <div className='w-fit mx-auto flex flex-col gap-6 items-center'>
        <Button type='yellow' onClick={() => setShowAnswers(true)}>
          {translations.showAnswers}
        </Button>
        {showAnswers && (
          <>
            <p className='text-xl italic'>
              Total score: {totalScore} / {totalQuestions}
            </p>
            <h2 className='text-3xl font-medium'>Test Answers</h2>
            <div>
              {test.flowOrder.map((section) => (
                <div key={section}>
                  {section === 'listeningTrueFalse' && (
                    <>
                      <h3 className='text-2xl mb-4'>Listening True False</h3>
                      <div className='flex flex-wrap gap-8'>
                        {test.listeningTrueFalse.map((question) => (
                          <p key={question.questionNumber}>
                            {question.questionNumber}
                            {question.answer === true && (
                              <Check className='inline-block ml-1' />
                            )}
                            {question.answer === false && (
                              <X className='inline-block ml-1' />
                            )}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <h2 className='text-3xl font-medium'>Your Answers</h2>
            <div>
              {test.flowOrder.map((section) => (
                <div key={section}>
                  {section === 'listeningTrueFalse' && (
                    <>
                      <h3 className='text-2xl mb-4'>Listening True False</h3>
                      <div className='flex flex-wrap gap-8'>
                        {listeningTrueFalseAnswers.map((userAnswer, index) => (
                          <p key={`listeningTrueFalse-userAnswer-${index}`}>
                            {index + 1}
                            {userAnswer === true && (
                              <Check className='inline-block ml-1' />
                            )}
                            {userAnswer === false && (
                              <X className='inline-block ml-1' />
                            )}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {/* <div className='w-fit mx-auto'>
        <Button type='yellow' className='md:mr-20'>
          {translations.previous}
        </Button>
        <Button type='yellow'>{translations.next}</Button>
      </div> */}
    </>
  );
}
