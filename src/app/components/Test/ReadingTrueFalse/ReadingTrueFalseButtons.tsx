import React from 'react';
import { TestTranslations } from '../Test.types';
import { HandleReadingTrueFalseAnswer } from '../Test.types';
import { Button } from '@/src/app/components/Button';
import { Check, X } from 'lucide-react';
import { VisuallyHidden } from '@/src/app/components/VisuallyHidden';
import { Database } from '@/src/app/types/supabase';

type states = 'initial' | 'greenSelected' | 'redSelected';

type Props = {
  translations: TestTranslations;
  handleReadingTrueFalseAnswer: HandleReadingTrueFalseAnswer;
  index: number;
  questionNumber: Database['mock_test']['Tables']['reading_true_false']['Row']['questionNumber'];
};

export function ReadingTrueFalseButtons({
  translations,
  handleReadingTrueFalseAnswer,
  index,
  questionNumber,
}: Props) {
  const [state, setState] = React.useState<states>('initial');

  const handleState = (newState: states) => {
    setState(newState);

    if (newState === 'greenSelected') {
      handleReadingTrueFalseAnswer(true, index, questionNumber);
    }

    if (newState === 'redSelected') {
      handleReadingTrueFalseAnswer(false, index, questionNumber);
    }
  };

  return (
    <>
      <Button
        type='lime'
        onClick={() => handleState('greenSelected')}
        className={`${state === 'redSelected' && 'opacity-30'}`}
      >
        <Check />
        <VisuallyHidden>{translations.check}</VisuallyHidden>
      </Button>
      <Button
        type='lightred'
        onClick={() => handleState('redSelected')}
        className={`${state === 'greenSelected' && 'opacity-30'}`}
      >
        <X />
        <VisuallyHidden>{translations.x}</VisuallyHidden>
      </Button>
    </>
  );
}
