import React from 'react';
import { TestHero } from '@/src/app/components/Test/TestHero';
import { HeroSkeleton } from '@/src/app/components/Hero';

export default async function Page({
  params,
}: {
  params: Promise<{ test: string }>;
}) {
  const { test } = await params;

  return (
    <>
      <React.Suspense fallback={<HeroSkeleton />}>
        <TestHero test={test} />
      </React.Suspense>
    </>
  );
}
