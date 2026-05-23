import React from "react";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Hero } from "@/src/app/components/Hero";
import { Card } from "@/src/app/components/Card";
import { Button } from "@/src/app/components/Button";
import { NewHskMockTestBundles } from "@/src/app/constants/new-hsk-mock-test-2026/new-hsk-mock-test-2026";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "NewHskMockTest2026.Metadata",
  });

  return {
    title: t("Title"),
    description: t("Description"),
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: "/new-hsk-mock-test-2026",
      languages: {
        en: "/en/new-hsk-mock-test-2026",
        es: "/es/new-hsk-mock-test-2026",
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

  const t = await getTranslations("NewHskMockTest2026");

  return (
    <>
      <Hero title={t("HeroTitle")}>
        <span className="block">{t("HeroMessage1")}</span>
        <span className="block mt-4">{t("HeroMessage2")}</span>
      </Hero>
      <section>
        <h2 className="text-3xl font-medium">{t("DownloadBundles")}</h2>
        <div className="flex flex-wrap justify-center">
          {NewHskMockTestBundles.map((bundle, index) => (
            <Card key={`bundle-${index}`} as="article" padding="3">
              <h3 className="text-2xl font-medium text-center">
                HSK {index + 1}
              </h3>
              <div className="flex flex-col">
                {bundle.map((item) => (
                  <Button
                    key={item.filename}
                    type="yellow"
                    as="link"
                    href={item.url}
                    target="_self"
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
