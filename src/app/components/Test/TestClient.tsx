'use client';
import React from 'react';
import { ListeningTrueFalse } from '@/src/app/components/Test/ListeningTrueFalse';
import { ListeningMatchImageAudio } from '@/src/app/components/Test/ListeningMatchImageAudio';
import { ListeningMatchImageAudioSingleImage } from '@/src/app/components/Test/ListeningMatchImageAudioSingleImage';
import { ListeningSelectPhrase } from '@/src/app/components/Test/ListeningSelectPhrase';
import { Button } from '@/src/app/components/Button';
import {
  Test,
  HandleListeningTrueFalseAnswer,
  TestTranslations,
  HandleListeningMatchImageAudioAnswer,
  HandleListeningMatchImageAudioSingleImageAnswer,
  HandleListeningSelectPhraseAnswer,
  HandleReadingTrueFalseAnswer,
  HandleReadingMatchImageAnswer,
} from './Test.types';
import { Check, X } from 'lucide-react';
import { Database } from '@/src/app/types/supabase';
import { ReadingTrueFalse } from '@/src/app/components/Test/ReadingTrueFalse';
import { ReadingMatchImage } from '@/src/app/components/Test/ReadingMatchImage';

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

  const [
    listeningMatchImageAudioSingleImageAnswers,
    setListeningMatchImageAudioSingleImageAnswers,
  ] = React.useState<{ answer: string; questionNumber: string }[]>(
    Array.from({ length: test.listeningMatchImageAudioSingleImage.length }).map(
      () => ({
        answer: '',
        questionNumber: '',
      })
    )
  );

  const [listeningSelectPhraseAnswers, setListeningSelectPhraseAnswers] =
    React.useState<
      {
        answer: Database['public']['Enums']['letter_range'] | '';
        questionNumber: Database['mock_test']['Tables']['listening_select_phrase']['Row']['questionNumber'];
      }[]
    >(
      Array.from({ length: test.listeningSelectPhrase.length }).map(() => ({
        answer: '',
        questionNumber: '',
      }))
    );

  const [readingTrueFalseAnswers, setReadingTrueFalseAnswers] = React.useState<
    {
      answer: boolean;
      questionNumber: Database['mock_test']['Tables']['reading_true_false']['Row']['questionNumber'];
    }[]
  >(
    Array.from({ length: test.readingTrueFalse.length }).map(() => ({
      answer: false,
      questionNumber: '',
    }))
  );

  const [readingMatchImageAnswers, setReadingMatchImageAnswers] =
    React.useState<
      {
        answer: Database['public']['Enums']['letter_range'] | '';
        questionNumber: Database['mock_test']['Tables']['reading_match_image']['Row']['questionNumber'];
      }[]
    >(
      Array.from({ length: test.readingMatchImage.length }).map(() => ({
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

  const handleListeningMatchImageAudioSingleImageAnswer: HandleListeningMatchImageAudioSingleImageAnswer =
    (answer, index, questionNumber) => {
      const newListeningMatchImageAudioSingleImageAnswers = [
        ...listeningMatchImageAudioSingleImageAnswers,
      ];

      newListeningMatchImageAudioSingleImageAnswers[index].answer = answer;
      newListeningMatchImageAudioSingleImageAnswers[index].questionNumber =
        questionNumber;

      setListeningMatchImageAudioSingleImageAnswers(
        newListeningMatchImageAudioSingleImageAnswers
      );
    };

  const handleListeningSelectPhraseAnswers: HandleListeningSelectPhraseAnswer =
    (answer, index, questionNumber) => {
      const newListeningMatchSelectPhraseAnswer = [
        ...listeningSelectPhraseAnswers,
      ];

      newListeningMatchSelectPhraseAnswer[index].answer = answer;
      newListeningMatchSelectPhraseAnswer[index].questionNumber =
        questionNumber;

      setListeningSelectPhraseAnswers(newListeningMatchSelectPhraseAnswer);
    };

  const handleReadingTrueFalseAnswer: HandleReadingTrueFalseAnswer = (
    answer,
    index,
    questionNumber
  ) => {
    const newReadingTrueFalseAnswers = [...readingTrueFalseAnswers];

    newReadingTrueFalseAnswers[index].answer = answer;
    newReadingTrueFalseAnswers[index].questionNumber = questionNumber;

    setReadingTrueFalseAnswers(newReadingTrueFalseAnswers);
  };

  const handleReadingMatchImageAnswer: HandleReadingMatchImageAnswer = (
    answer,
    index,
    questionNumber
  ) => {
    const newReadingMatchImageAnswers = [...readingMatchImageAnswers];

    newReadingMatchImageAnswers[index].answer = answer;
    newReadingMatchImageAnswers[index].questionNumber = questionNumber;

    setReadingMatchImageAnswers(newReadingMatchImageAnswers);
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

  const listeningMatchImageAudioSingleImageEvaluation =
    test.listeningMatchImageAudioSingleImage.map(
      (question, index) =>
        question.answer ===
        listeningMatchImageAudioSingleImageAnswers[index]?.answer
    );

  const listeningSelectPhraseEvaluation = test.listeningSelectPhrase.map(
    (question, index) =>
      question.answer === listeningSelectPhraseAnswers[index]?.answer
  );

  const readingTrueFalseEvaluation = test.readingTrueFalse.map(
    (question, index) =>
      question.answer === readingTrueFalseAnswers[index]?.answer
  );

  const readingMatchImageEvaluation = test.readingMatchImage.map(
    (question, index) =>
      question.answer === readingMatchImageAnswers[index]?.answer
  );

  //make sure to add up all questions from test
  const totalQuestions =
    test.listeningTrueFalse.length +
    test.listeningMatchImageAudio.length +
    test.listeningMatchImageAudioSingleImage.length +
    test.listeningSelectPhrase.length +
    test.readingTrueFalse.length +
    test.readingMatchImage.length;

  let totalScore = 0;

  //make sure to add all section to sumup the score
  listeningTrueFalseEvaluation.map((evaluation) => {
    if (evaluation) totalScore += 1;
  });

  listeningMatchImageAudioEvaluation.map((evaluation) => {
    if (evaluation) totalScore += 1;
  });

  listeningMatchImageAudioSingleImageEvaluation.map((evaluation) => {
    if (evaluation) totalScore += 1;
  });

  listeningSelectPhraseEvaluation.map((evaluation) => {
    if (evaluation) totalScore += 1;
  });

  readingTrueFalseEvaluation.map((evaluation) => {
    if (evaluation) totalScore += 1;
  });

  readingMatchImageEvaluation.map((evaluation) => {
    if (evaluation) totalScore += 1;
  });

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
      <ListeningMatchImageAudioSingleImage
        questions={test.listeningMatchImageAudioSingleImage}
        handleListeningMatchImageAudioSingleImageAnswer={
          handleListeningMatchImageAudioSingleImageAnswer
        }
        translations={translations}
      />
      <ListeningSelectPhrase
        questions={test.listeningSelectPhrase}
        handleListeningSelectPhraseAnswers={handleListeningSelectPhraseAnswers}
        translations={translations}
      />
      <ReadingTrueFalse
        questions={test.readingTrueFalse}
        handleReadingTrueFalseAnswer={handleReadingTrueFalseAnswer}
        translations={translations}
      />
      <ReadingMatchImage
        questions={test.readingMatchImage}
        handleReadingMatchImageAnswer={handleReadingMatchImageAnswer}
        translations={translations}
      />
      <div className='w-fit mx-auto flex flex-col gap-6 items-center'>
        <Button type='yellow' onClick={() => setShowAnswers(true)}>
          {translations.showAnswers}
        </Button>
        {showAnswers && (
          <>
            <p className='text-xl italic'>
              {translations.Answers.score}: {totalScore} / {totalQuestions}
            </p>
            <div className='flex flex-wrap gap-12'>
              <div>
                <h2 className='text-3xl font-medium'>
                  {translations.Answers.test}
                </h2>
                <div>
                  {test.flowOrder.map((section) => (
                    <div key={section}>
                      {section === 'listeningTrueFalse' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.listeningTrueFalse}
                          </h3>
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
                            {translations.Answers.listeningMatchImageAudio}
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
                      {section === 'listeningMatchImageAudioSingleImage' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {
                              translations.Answers
                                .listeningMatchImageAudioSingleImage
                            }
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {test.listeningMatchImageAudioSingleImage.map(
                              (question) => (
                                <p key={question.questionNumber}>
                                  {question.questionNumber}
                                  {question.answer}
                                </p>
                              )
                            )}
                          </div>
                        </>
                      )}
                      {section === 'listeningSelectPhrase' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.listeningSelectPhrase}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {test.listeningSelectPhrase.map((question) => (
                              <p key={question.questionNumber}>
                                {question.questionNumber}
                                {question.answer}
                              </p>
                            ))}
                          </div>
                        </>
                      )}
                      {section === 'readingTrueFalse' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.readingTrueFalse}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {test.readingTrueFalse.map((question) => (
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
                      {section === 'readingMatchImage' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.readingMatchImage}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {test.readingMatchImage.map((question) => (
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
              </div>
              <div>
                <h2 className='text-3xl font-medium'>
                  {translations.Answers.your}
                </h2>
                <div>
                  {test.flowOrder.map((section) => (
                    <div key={section}>
                      {section === 'listeningTrueFalse' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.listeningTrueFalse}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {listeningTrueFalseAnswers.map(
                              (userAnswer, index) => (
                                <p
                                  key={`listeningTrueFalse-userAnswer-${index}`}
                                >
                                  {index + 1}
                                  {userAnswer === true && (
                                    <Check className='inline-block ml-1' />
                                  )}
                                  {userAnswer === false && (
                                    <X className='inline-block ml-1' />
                                  )}
                                </p>
                              )
                            )}
                          </div>
                        </>
                      )}
                      {section === 'listeningMatchImageAudio' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.listeningMatchImageAudio}
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
                      {section === 'listeningMatchImageAudioSingleImage' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {
                              translations.Answers
                                .listeningMatchImageAudioSingleImage
                            }
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {listeningMatchImageAudioSingleImageAnswers.map(
                              (userAnswer, index) => (
                                <p
                                  key={`listeningMatchImageAudioSingleImage-userAnswer-${index}`}
                                >
                                  {userAnswer?.questionNumber}
                                  {userAnswer?.answer}
                                </p>
                              )
                            )}
                          </div>
                        </>
                      )}
                      {section === 'listeningSelectPhrase' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.listeningSelectPhrase}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {listeningSelectPhraseAnswers.map(
                              (question, index) => (
                                <p
                                  key={`listeningSelectPhrase-userAnswer-${question.questionNumber}-${index}`}
                                >
                                  {question.questionNumber}
                                  {question.answer}
                                </p>
                              )
                            )}
                          </div>
                        </>
                      )}
                      {section === 'readingTrueFalse' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.readingTrueFalse}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {readingTrueFalseAnswers.map(
                              (userAnswer, index) => (
                                <p key={`readingTrueFalse-userAnswer-${index}`}>
                                  {userAnswer.questionNumber}
                                  {userAnswer.answer === true && (
                                    <Check className='inline-block ml-1' />
                                  )}
                                  {userAnswer.answer === false && (
                                    <X className='inline-block ml-1' />
                                  )}
                                </p>
                              )
                            )}
                          </div>
                        </>
                      )}
                      {section === 'readingMatchImage' && (
                        <>
                          <h3 className='text-2xl mb-4'>
                            {translations.Answers.readingMatchImage}
                          </h3>
                          <div className='flex flex-wrap gap-8 mb-4'>
                            {readingMatchImageAnswers.map(
                              (userAnswer, index) => (
                                <p
                                  key={`readingMatchImage-userAnswer-${index}`}
                                >
                                  {userAnswer.questionNumber}
                                  {userAnswer.answer}
                                </p>
                              )
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
