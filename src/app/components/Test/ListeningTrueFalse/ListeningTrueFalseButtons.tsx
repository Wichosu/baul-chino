'use client';
import React from 'react';
import { Button } from '@/src/app/components/Button';
import { Check, X } from 'lucide-react';
import { VisuallyHidden } from '@/src/app/components/VisuallyHidden';
import { HandleListeningTrueFalseAnswer, Translations } from '../Test.types';

type states = 'initial' | 'greenSelected' | 'redSelected';

type Props = {
  translations: Translations;
  handleListeningTrueFalseAnswer: HandleListeningTrueFalseAnswer;
  index: number;
};

export function ListeningTrueFalseButtons({
  translations,
  handleListeningTrueFalseAnswer,
  index,
}: Props) {
  const [state, setState] = React.useState<states>('initial');

  const handleState = (newState: states) => {
    setState(newState);

    if (newState === 'greenSelected') {
      handleListeningTrueFalseAnswer(true, index);
    }

    if (newState === 'redSelected') {
      handleListeningTrueFalseAnswer(false, index);
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
