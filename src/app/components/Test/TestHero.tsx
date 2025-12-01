import React from 'react';
import { createStaticClient } from '@/src/app/utils/supabase/server';
import { Hero } from '@/src/app/components/Hero';
import { getTranslations } from 'next-intl/server';

type Props = {
  test: string;
};

export async function TestHero({ test }: Props) {
  const t = await getTranslations('Test.Hero');

  const supabase = createStaticClient();

  const { data: testData } = await supabase
    .schema('mock_test')
    .from('mock_test')
    .select(
      `
      name,
      hsk_level ( level ),
      listening_true_false ( 
        questionType ( name ),
        sectionType ( name )
      )
      `
    )
    .eq('id', test)
    .single();

  return (
    <>
      <Hero
        title={`${testData?.hsk_level?.level} - ${testData?.name} - ${testData?.listening_true_false[0]?.sectionType?.name}`}
      >
        {t(testData?.listening_true_false[0]?.questionType?.name ?? '')}
      </Hero>
    </>
  );
}
