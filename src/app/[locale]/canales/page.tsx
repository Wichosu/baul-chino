import 'server-only';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { createClient } from '@/src/app/utils/supabase/server';
import { Hero } from '../../components/Hero';
import Filter from './components/Filter';
import { getTranslations } from 'next-intl/server';

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
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/canales',
      languages: {
        es: '/es/canales',
      },
    },
  };
}

export default async function Page() {
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
