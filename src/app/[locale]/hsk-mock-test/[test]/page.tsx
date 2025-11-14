import React from 'react';
import { TestHero, ListeningTrueFalse } from '@/src/app/components/Test';
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
      <React.Suspense fallback={<div>Loading Listening True False...</div>}>
        <ListeningTrueFalse test={test} />
      </React.Suspense>
    </>
  );
}
