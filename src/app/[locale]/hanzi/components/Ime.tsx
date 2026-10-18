'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const LazyIme = dynamic(() => import('./ImeInstance'), { loading: () => <Loading /> })

export default function Ime() {
  return (
    <LazyIme />
  )
}

function Loading() {
  const t = useTranslations('Hanzi')

  return (
    <div>
      <div className="animate-pulse">{t('Ime.Loading')}</div> {t('Ime.Hint')}
    </div>
  )
}