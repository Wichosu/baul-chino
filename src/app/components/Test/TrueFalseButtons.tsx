'use client';
import React from 'react';
import { Button } from '@/src/app/components/Button';
import { Check, X } from 'lucide-react';
import { VisuallyHidden } from '@/src/app/components/VisuallyHidden';
import { useTranslations } from 'next-intl';

type State = 'initial' | 'greenSelected' | 'redSelected';

type Props = {
  onAnswer: (answer: boolean) => void;
};

export function TrueFalseButtons({ onAnswer }: Props) {
  const [state, setState] = React.useState<State>('initial');
  const t = useTranslations('Test');

  function handleState(newState: State) {
    setState(newState);

    if (newState === 'greenSelected') {
      onAnswer(true);
    }

    if (newState === 'redSelected') {
      onAnswer(false);
    }
  }

  return (
    <>
      <Button
        type='lime'
        onClick={() => handleState('greenSelected')}
        className={`${state === 'redSelected' && 'opacity-30'}`}
      >
        <Check />
        <VisuallyHidden>{t('Icons.Check')}</VisuallyHidden>
      </Button>
      <Button
        type='lightred'
        onClick={() => handleState('redSelected')}
        className={`${state === 'greenSelected' && 'opacity-30'}`}
      >
        <X />
        <VisuallyHidden>{t('Icons.X')}</VisuallyHidden>
      </Button>
    </>
  );
}
