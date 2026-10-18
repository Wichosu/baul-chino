import React from 'react';
import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { createClient } from '@/src/app/utils/supabase/server';
import { TestFetch } from '@/src/app/components/Test/TestFetch';
import { ListeningTrueFalseSkeleton } from '@/src/app/components/Test/ListeningTrueFalse';
import { TestHero } from '@/src/app/components/Test/TestHero';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; test: string }>;
}): Promise<Metadata> {
  const { locale, test } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'HskMockTest.Metadata',
  });

  const supabase = createClient();
  const { data } = await supabase
    .schema('mock_test')
    .from('mock_test')
    .select('name')
    .eq('id', test)
    .maybeSingle();

  return {
    title: data?.name ?? t('Title'),
    description: t('Description'),
    alternates: {
      canonical: `/hsk-mock-test/${test}`,
      languages: {
        es: `/es/hsk-mock-test/${test}`,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; test: string }>;
}) {
  const { locale, test } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

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
