'use client';
import React from 'react';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/src/app/components/Select';
import { SelectOptions } from './Test.types';
import { useTranslations } from 'next-intl';

export const LETTERS_ABC: SelectOptions[] = ['A', 'B', 'C'];
export const LETTERS_ABCDEF: SelectOptions[] = ['A', 'B', 'C', 'D', 'E', 'F'];

type Props = {
  questionNumber: string;
  options: SelectOptions[];
  onValueChange: (value: SelectOptions) => void;
};

export function LetterSelect({
  questionNumber,
  options,
  onValueChange,
}: Props) {
  const t = useTranslations('Test');

  return (
    <SelectRoot onValueChange={(value) => onValueChange(value as SelectOptions)}>
      <SelectTrigger
        ariaLabel={t('LetterSelect.AriaLabel', { questionNumber })}
      >
        {t('LetterSelect.Trigger')}
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
