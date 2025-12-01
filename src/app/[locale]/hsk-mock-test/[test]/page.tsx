import React from 'react';
import { TestHero, TestFetch } from '@/src/app/components/Test';
import { ListeningTrueFalseSkeleton } from '@/src/app/components/Test/ListeningTrueFalse';
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
      <React.Suspense
        fallback={<ListeningTrueFalseSkeleton skeletonItems={5} />}
      >
        <TestFetch testId={test} />
      </React.Suspense>
    </>
  );
}
