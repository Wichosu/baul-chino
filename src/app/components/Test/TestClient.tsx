'use client';
import React from 'react';
import { ListeningTrueFalse } from '@/src/app/components/Test/ListeningTrueFalse';
import { ListeningMatchImageAudio } from '@/src/app/components/Test/ListeningMatchImageAudio';
import { ListeningMatchImageAudioSingleImage } from '@/src/app/components/Test/ListeningMatchImageAudioSingleImage';
import { Button } from '@/src/app/components/Button';
import {
  Test,
  HandleListeningTrueFalseAnswer,
  TestTranslations,
  HandleListeningMatchImageAudioAnswer,
} from './Test.types';
import { Check, X } from 'lucide-react';

type Props = {
  test: Test;
  translations: TestTranslations;
};

export function TestClient({ test, translations }: Props) {
  const [showAnswers, setShowAnswers] = React.useState(false);

  const [listeningTrueFalseAnswers, setListeningTrueFalseAnswers] =
    React.useState<boolean[]>(
      Array.from({ length: test.listeningTrueFalse.length })
    );

  const [listeningMatchImageAudioAnswers, setListeningMatchImageAudioAnswers] =
    React.useState<{ answer: string; questionNumber: string }[]>(
      Array.from({ length: test.listeningMatchImageAudio.length }).map(() => ({
        answer: '',
        questionNumber: '',
      }))
    );

  const [listeningMatchImageAudioSingleImageAnswers, setListeningMatchImageAudioSingleImageAnswers] =
    React.useState<{ answer: string; questionNumber: string }[]>(
      Array.from({ length: test.listeningMatchImageAudioSingleImage.length }).map(() => ({
        answer: '',
        questionNumber: '',
      }))
    );

  const handleListeningTrueFalseAnswer: HandleListeningTrueFalseAnswer = (
    answer,
    index
  ) => {
    const newListeningTrueFalseAnswers = [...listeningTrueFalseAnswers];

    newListeningTrueFalseAnswers[index] = answer;

    setListeningTrueFalseAnswers(newListeningTrueFalseAnswers);
  };

  const handleListeningMatchImageAudioAnswer: HandleListeningMatchImageAudioAnswer =
    (answer, index, questionNumber) => {
      const newListeningMatchImageAudioAnswers = [
        ...listeningMatchImageAudioAnswers,
      ];

      newListeningMatchImageAudioAnswers[index].answer = answer;
      newListeningMatchImageAudioAnswers[index].questionNumber = questionNumber;

      setListeningMatchImageAudioAnswers(newListeningMatchImageAudioAnswers);
    };

  //evaluate user answers with test answers
  //if true it means correct answer, if false it means incorrect answer
  const listeningTrueFalseEvaluation = test.listeningTrueFalse.map(
    (question, index) => question.answer === listeningTrueFalseAnswers[index]
  );

  const listeningMatchImageAudioEvaluation = test.listeningMatchImageAudio.map(
    (question, index) =>
      question.answer === listeningMatchImageAudioAnswers[index]?.answer
  );

  //make sure to add up all questions from test
  const totalQuestions =
    test.listeningTrueFalse.length + test.listeningMatchImageAudio.length;

  let totalScore = 0;

  //make sure to add all section to sumup the score
  listeningTrueFalseEvaluation.map((evaluation) => {
    if (evaluation === true) totalScore += 1;
  });

  listeningMatchImageAudioEvaluation.map((evaluation) => {
    if (evaluation === true) totalScore += 1;
  });

  console.log(test);

  return (
    <>
      <ListeningTrueFalse
        questions={test.listeningTrueFalse}
        handleListeningTrueFalseAnswer={handleListeningTrueFalseAnswer}
        translations={translations}
      />
      <ListeningMatchImageAudio
        questions={test.listeningMatchImageAudio}
        handleListeningMatchImageAudioAnswer={
          handleListeningMatchImageAudioAnswer
        }
        translations={translations}
      />
      <ListeningMatchImageAudioSingleImage />
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
                      <div className='flex flex-wrap gap-8 mb-4'>
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
                  {section === 'listeningMatchImageAudio' && (
                    <>
                      <h3 className='text-2xl mb-4'>
                        Listening Match Image Audio
                      </h3>
                      <div className='flex flex-wrap gap-8 mb-4'>
                        {test.listeningMatchImageAudio.map((question) => (
                          <p key={question.questionNumber}>
                            {question.questionNumber}
                            {question.answer}
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
                      <div className='flex flex-wrap gap-8 mb-4'>
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
                  {section === 'listeningMatchImageAudio' && (
                    <>
                      <h3 className='text-2xl mb-4'>
                        Listening Match Image Audio
                      </h3>
                      <div className='flex flex-wrap gap-8 mb-4'>
                        {listeningMatchImageAudioAnswers.map(
                          (userAnswer, index) => (
                            <p
                              key={`listeningMatchImageAudio-userAnswer-${index}`}
                            >
                              {userAnswer?.questionNumber}
                              {userAnswer?.answer}
                            </p>
                          )
                        )}
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
