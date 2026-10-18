import 'server-only';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { createClient } from '@/src/app/utils/supabase/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Hero } from '@/src/app/components/Hero';
import Filter from './components/Filter';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Channels.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    alternates: {
      canonical: '/canales',
      languages: {
        es: '/es/canales',
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations('Channels');
  const supabase = createClient(cookies());

  const [categoriesRes, languagesRes, channelsRes] = await Promise.all([
    supabase.from('category').select('*'),
    supabase.from('language').select('*'),
    supabase.from('channel').select(`
      *,
      channel_category!inner (
        category!inner (
          id,
          name
        )
      ),
      channel_language!inner (
        language!inner (
          id,
          name
        )
      )
    `),
  ]);

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span style={{ display: 'block' }}>{t('HeroMessage1')}</span>
        <br />
        <span style={{ display: 'block' }}>{t('HeroMessage2')}</span>
      </Hero>
      <Filter
        FetchedCategories={categoriesRes.data ?? []}
        FetchedLanguages={languagesRes.data ?? []}
        FetchedChannels={channelsRes.data ?? []}
      />
    </>
  );
}
