import React from 'react';
import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { KoFiButton } from '@/src/app/components/KoFiButton';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Support.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/support',
      languages: {
        es: '/es/support',
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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

  setRequestLocale(locale);

  const t = await getTranslations('Support');

  return (
    <section className='my-6'>
      <h2 className='text-3xl text-center font-medium mb-2'>
        Support the project
      </h2>
      <div className='max-w-xl mx-auto text-lg'>
        <p className='mb-4'>
          If you’d like to support the project, you can do so by donating on
          Ko-fi. There’s absolutely no obligation — Baulchino will remain
          available regardless — but any support is truly appreciated and helps
          keep the project growing.
        </p>
        <p>
          The emails and comments I receive have been a great source of
          motivation, and I’m sincerely grateful for all of you. Knowing that
          Baulchino is helping you work toward your goals means more to me than
          anything else. Thank you for visiting and using Baulchino.
        </p>
        <div className='w-fit mx-auto'>
          <KoFiButton />
        </div>
      </div>
    </section>
  );
}
