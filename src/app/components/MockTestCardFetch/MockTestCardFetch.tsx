import React from 'react';
import { createClient } from '@/src/app/utils/supabase/server';
import { MockTestCard } from './MockTestCard';

export async function MockTestCardFetch() {
  const supabase = createClient();

  const { data: tests } = await supabase
    .schema('mock_test')
    .from('mock_test')
    .select(
      `
      id,
      name,
      hsk_level!inner ( level )
      `
    )
    .eq('hsk_level.level', 'HSK 1');

  return (
    <>
      <MockTestCard title='HSK 1' tests={tests ?? []} />
    </>
  );
}
