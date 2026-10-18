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
  HandleListeningMatchImageAudioAnswer,
  HandleListeningMatchImageAudioSingleImageAnswer,
  HandleListeningSelectPhraseAnswer,
  HandleReadingTrueFalseAnswer,
  HandleReadingMatchImageAnswer,
} from './Test.types';
import { Database } from '@/src/app/types/supabase';
import { ReadingTrueFalse } from '@/src/app/components/Test/ReadingTrueFalse';
import { ReadingMatchImage } from '@/src/app/components/Test/ReadingMatchImage';
import { AnswerReviewColumn, ReviewSection } from './AnswerReviewColumn';
import { useTranslations } from 'next-intl';

type Props = {
  test: Test;
};

export function TestClient({ test }: Props) {
  const [showAnswers, setShowAnswers] = React.useState(false);

  //unanswered questions stay undefined so they never match a true/false answer
  const [listeningTrueFalseAnswers, setListeningTrueFalseAnswers] =
    React.useState<(boolean | undefined)[]>(
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

  //unanswered questions stay undefined so a false answer only counts when the
  //user actually picked it (previously initialized to false, gifting points for
  //unanswered false statements)
  const [readingTrueFalseAnswers, setReadingTrueFalseAnswers] = React.useState<
    {
      answer: boolean | undefined;
      questionNumber: Database['mock_test']['Tables']['reading_true_false']['Row']['questionNumber'];
    }[]
  >(
    Array.from({ length: test.readingTrueFalse.length }).map(() => ({
      answer: undefined,
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
    setListeningTrueFalseAnswers((prev) => {
      const next = [...prev];
      next[index] = answer;
      return next;
    });
  };

  const handleListeningMatchImageAudioAnswer: HandleListeningMatchImageAudioAnswer =
    (answer, index, questionNumber) => {
      setListeningMatchImageAudioAnswers((prev) =>
        prev.map((item, i) =>
          i === index ? { answer, questionNumber } : item
        )
      );
    };

  const handleListeningMatchImageAudioSingleImageAnswer: HandleListeningMatchImageAudioSingleImageAnswer =
    (answer, index, questionNumber) => {
      setListeningMatchImageAudioSingleImageAnswers((prev) =>
        prev.map((item, i) =>
          i === index ? { answer, questionNumber } : item
        )
      );
    };

  const handleListeningSelectPhraseAnswers: HandleListeningSelectPhraseAnswer =
    (answer, index, questionNumber) => {
      setListeningSelectPhraseAnswers((prev) =>
        prev.map((item, i) =>
          i === index ? { answer, questionNumber } : item
        )
      );
    };

  const handleReadingTrueFalseAnswer: HandleReadingTrueFalseAnswer = (
    answer,
    index,
    questionNumber
  ) => {
    setReadingTrueFalseAnswers((prev) =>
      prev.map((item, i) => (i === index ? { answer, questionNumber } : item))
    );
  };

  const handleReadingMatchImageAnswer: HandleReadingMatchImageAnswer = (
    answer,
    index,
    questionNumber
  ) => {
    setReadingMatchImageAnswers((prev) =>
      prev.map((item, i) => (i === index ? { answer, questionNumber } : item))
    );
  };

  //make sure to add up all questions from test
  const totalQuestions =
    test.listeningTrueFalse.length +
    test.listeningMatchImageAudio.length +
    test.listeningMatchImageAudioSingleImage.length +
    test.listeningSelectPhrase.length +
    test.readingTrueFalse.length +
    test.readingMatchImage.length;

  //evaluate user answers with test answers
  //if true it means correct answer, if false it means incorrect answer
  //only needed while the score is on screen
  const totalScore = showAnswers
    ? [
        ...test.listeningTrueFalse.map(
          (question, index) =>
            question.answer === listeningTrueFalseAnswers[index]
        ),
        ...test.listeningMatchImageAudio.map(
          (question, index) =>
            question.answer === listeningMatchImageAudioAnswers[index]?.answer
        ),
        ...test.listeningMatchImageAudioSingleImage.map(
          (question, index) =>
            question.answer ===
            listeningMatchImageAudioSingleImageAnswers[index]?.answer
        ),
        ...test.listeningSelectPhrase.map(
          (question, index) =>
            question.answer === listeningSelectPhraseAnswers[index]?.answer
        ),
        ...test.readingTrueFalse.map(
          (question, index) =>
            question.answer === readingTrueFalseAnswers[index]?.answer
        ),
        ...test.readingMatchImage.map(
          (question, index) =>
            question.answer === readingMatchImageAnswers[index]?.answer
        ),
      ].filter(Boolean).length
    : 0;

  const t = useTranslations('Test');

  const testReviewSections: ReviewSection[] = test.flowOrder.map((type) => {
    switch (type) {
      case 'listeningTrueFalse':
        return {
          type,
          kind: 'boolean',
          heading: t('Answers.listeningTrueFalse'),
          items: test.listeningTrueFalse.map((question) => ({
            key: question.questionNumber,
            label: question.questionNumber,
            answer: question.answer,
          })),
        };
      case 'listeningMatchImageAudio':
        return {
          type,
          kind: 'text',
          heading: t('Answers.listeningMatchImageAudio'),
          items: test.listeningMatchImageAudio.map((question) => ({
            key: question.questionNumber,
            label: question.questionNumber,
            answer: question.answer,
          })),
        };
      case 'listeningMatchImageAudioSingleImage':
        return {
          type,
          kind: 'text',
          heading: t('Answers.listeningMatchImageAudioSingleImage'),
          items: test.listeningMatchImageAudioSingleImage.map((question) => ({
            key: question.questionNumber,
            label: question.questionNumber,
            answer: question.answer,
          })),
        };
      case 'listeningSelectPhrase':
        return {
          type,
          kind: 'text',
          heading: t('Answers.listeningSelectPhrase'),
          items: test.listeningSelectPhrase.map((question) => ({
            key: question.questionNumber,
            label: question.questionNumber,
            answer: question.answer,
          })),
        };
      case 'readingTrueFalse':
        return {
          type,
          kind: 'boolean',
          heading: t('Answers.readingTrueFalse'),
          items: test.readingTrueFalse.map((question) => ({
            key: question.questionNumber,
            label: question.questionNumber,
            answer: question.answer,
          })),
        };
      case 'readingMatchImage':
        return {
          type,
          kind: 'text',
          heading: t('Answers.readingMatchImage'),
          items: test.readingMatchImage.map((question) => ({
            key: question.questionNumber,
            label: question.questionNumber,
            answer: question.answer,
          })),
        };
    }
  });

  const userReviewSections: ReviewSection[] = test.flowOrder.map((type) => {
    switch (type) {
      case 'listeningTrueFalse':
        return {
          type,
          kind: 'boolean',
          heading: t('Answers.listeningTrueFalse'),
          items: listeningTrueFalseAnswers.map((answer, index) => ({
            key: `listeningTrueFalse-userAnswer-${index}`,
            label: index + 1,
            answer,
          })),
        };
      case 'listeningMatchImageAudio':
        return {
          type,
          kind: 'text',
          heading: t('Answers.listeningMatchImageAudio'),
          items: listeningMatchImageAudioAnswers.map((answer, index) => ({
            key: `listeningMatchImageAudio-userAnswer-${index}`,
            label: answer?.questionNumber,
            answer: answer?.answer,
          })),
        };
      case 'listeningMatchImageAudioSingleImage':
        return {
          type,
          kind: 'text',
          heading: t('Answers.listeningMatchImageAudioSingleImage'),
          items: listeningMatchImageAudioSingleImageAnswers.map(
            (answer, index) => ({
              key: `listeningMatchImageAudioSingleImage-userAnswer-${index}`,
              label: answer?.questionNumber,
              answer: answer?.answer,
            })
          ),
        };
      case 'listeningSelectPhrase':
        return {
          type,
          kind: 'text',
          heading: t('Answers.listeningSelectPhrase'),
          items: listeningSelectPhraseAnswers.map((answer, index) => ({
            key: `listeningSelectPhrase-userAnswer-${answer.questionNumber}-${index}`,
            label: answer.questionNumber,
            answer: answer.answer,
          })),
        };
      case 'readingTrueFalse':
        return {
          type,
          kind: 'boolean',
          heading: t('Answers.readingTrueFalse'),
          items: readingTrueFalseAnswers.map((answer, index) => ({
            key: `readingTrueFalse-userAnswer-${index}`,
            label: answer.questionNumber,
            answer: answer.answer,
          })),
        };
      case 'readingMatchImage':
        return {
          type,
          kind: 'text',
          heading: t('Answers.readingMatchImage'),
          items: readingMatchImageAnswers.map((answer, index) => ({
            key: `readingMatchImage-userAnswer-${index}`,
            label: answer.questionNumber,
            answer: answer.answer,
          })),
        };
    }
  });

  return (
    <>
      <ListeningTrueFalse
        questions={test.listeningTrueFalse}
        handleListeningTrueFalseAnswer={handleListeningTrueFalseAnswer}
      />
      <ListeningMatchImageAudio
        questions={test.listeningMatchImageAudio}
        handleListeningMatchImageAudioAnswer={
          handleListeningMatchImageAudioAnswer
        }
      />
      <ListeningMatchImageAudioSingleImage
        questions={test.listeningMatchImageAudioSingleImage}
        handleListeningMatchImageAudioSingleImageAnswer={
          handleListeningMatchImageAudioSingleImageAnswer
        }
      />
      <ListeningSelectPhrase
        questions={test.listeningSelectPhrase}
        handleListeningSelectPhraseAnswers={handleListeningSelectPhraseAnswers}
      />
      <ReadingTrueFalse
        questions={test.readingTrueFalse}
        handleReadingTrueFalseAnswer={handleReadingTrueFalseAnswer}
      />
      <ReadingMatchImage
        questions={test.readingMatchImage}
        handleReadingMatchImageAnswer={handleReadingMatchImageAnswer}
      />
      <div className='w-fit mx-auto flex flex-col gap-6 items-center'>
        <Button type='yellow' onClick={() => setShowAnswers(true)}>
          {t('ShowAnswers')}
        </Button>
        {showAnswers && (
          <>
            <p className='text-xl italic'>
              {t('Answers.Score')}: {totalScore} / {totalQuestions}
            </p>
            <div className='flex flex-wrap gap-12'>
              <AnswerReviewColumn
                title={t('Answers.Test')}
                sections={testReviewSections}
              />
              <AnswerReviewColumn
                title={t('Answers.Your')}
                sections={userReviewSections}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
