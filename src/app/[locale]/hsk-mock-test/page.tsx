import React from "react";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { Hero } from "@/src/app/components/Hero";
import { Card } from "@/src/app/components/Card";
import { Button } from "@/src/app/components/Button";
import { MockTestBundles } from "@/src/app/constants/hskmocktest/hskmocktestbundles";
import { MockTestCardFetch } from "@/src/app/components/MockTestCardFetch";
import { CardSkeleton } from "@/src/app/components/Card";

// Revalidate at most once an hour so new mock tests show up without a redeploy
export const revalidate = 3600;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "HskMockTest.Metadata",
  });

  return {
    title: t("Title"),
    description: t("Description"),
    alternates: {
      canonical: "/hsk-mock-test",
      languages: {
        es: "/es/hsk-mock-test",
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

  setRequestLocale(locale);

  const t = await getTranslations("HskMockTest");

  return (
    <>
      <Hero title={t("HeroTitle")}>
        <span className="block">{t("HeroMessage1")}</span>
        <span className="block mt-4">{t("HeroMessage2")}</span>
      </Hero>
      <section>
        <h2 className="text-3xl font-medium">{t("OnlineSimulator")}</h2>
        <div className="flex flex-wrap justify-center">
          <React.Suspense fallback={<CardSkeleton height="xs" />}>
            <MockTestCardFetch />
          </React.Suspense>
        </div>
        <h2 className="text-3xl font-medium">{t("DownloadBundles")}</h2>
        <div className="flex flex-wrap justify-center">
          {MockTestBundles.map((bundle, index) => (
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
