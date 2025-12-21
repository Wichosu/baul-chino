import React from 'react';
import { TestFetch } from '@/src/app/components/Test/TestFetch';
import { ListeningTrueFalseSkeleton } from '@/src/app/components/Test/ListeningTrueFalse';
import { TestHero } from '@/src/app/components/Test/TestHero';

export default async function Page({
  params,
}: {
  params: Promise<{ test: string }>;
}) {
  const { test } = await params;

  return (
    <>
      <TestHero />
      <React.Suspense
        fallback={<ListeningTrueFalseSkeleton skeletonItems={5} />}
      >
        <TestFetch testId={test} />
      </React.Suspense>
    </>
  );
}
