import React from 'react';
import { Hero } from './Hero';
import { Redacted_Script } from 'next/font/google';

const loadingFont = Redacted_Script({
  subsets: ['latin'],
  weight: ['400'],
});

export function HeroSkeleton() {
  return (
    <Hero
      title={
        <div className={`${loadingFont.className} animate-pulse`}>
          Loading Title Please Wait
        </div>
      }
    >
      <span className={`${loadingFont.className} animate-pulse`}>
        Loading Description. This text is a placeholder for the description
        while it loads please wait, many thank yous
      </span>
    </Hero>
  );
}
