import React from 'react';
import { Card } from './Card';
import { Redacted_Script } from 'next/font/google';

const loadingFont = Redacted_Script({
  subsets: ['latin'],
  weight: ['400'],
});

type HeightScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type GapScale = 'sm' | 'md' | 'lg';

type Props = {
  height?: HeightScale;
  gap?: GapScale;
};

const bigSquareHeight: Record<HeightScale, string> = {
  xs: 'h-16',
  sm: 'h-24',
  md: 'h-32',
  lg: 'h-48',
  xl: 'h-64',
};

const smallSquareHeight: Record<HeightScale, string> = {
  xs: 'h-8',
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-24',
  xl: 'h-32',
};

const gapClass: Record<GapScale, string> = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export function CardSkeleton({ height = 'md', gap = 'md' }: Props) {
  return (
    <Card as='div'>
      <div className={`${loadingFont.className} grid ${gapClass[gap]}`}>
        <div className='text-2xl font-bold'>loading title</div>
        <div
          className={`w-full ${bigSquareHeight[height]} bg-gray-300 rounded-xs animate-pulse`}
        />
        <div
          className={`w-full ${smallSquareHeight[height]} bg-gray-300 rounded-md animate-pulse`}
        />
      </div>
    </Card>
  );
}
