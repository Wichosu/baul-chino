import React from 'react';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';
import { EmptyState } from '@/src/app/components/EmptyState/EmptyState';
import { getTranslations } from 'next-intl/server';
import { Database } from '@/src/app/types/supabase';

type MockTest = Database['mock_test']['Tables']['mock_test']['Row'];
type HskLevel = Database['mock_test']['Tables']['hsk_level']['Row'];

type MockTestWithLevel = Omit<MockTest, 'hsk_level'> & {
  hsk_level: Pick<HskLevel, 'level'> | null;
};

type Props = {
  title: string;
  tests: MockTestWithLevel[] | undefined;
};

export async function MockTestCard({ title, tests }: Props) {
  const tCommon = await getTranslations('Common');

  return (
    <Card as='article' padding='3'>
      <h3 className='text-2xl font-medium text-center'>{title}</h3>
      <div className='flex flex-col'>
        {tests && tests.length > 0 ? (
          tests.map(({ id, name }) => (
            <Button
              key={id}
              type='yellow'
              as='link'
              href={`/hsk-mock-test/${id}`}
            >
              {name}
            </Button>
          ))
        ) : (
          <EmptyState
            title={tCommon('Empty.FirstUseTitle')}
            message={tCommon('Empty.FirstUseMessage')}
          />
        )}
      </div>
    </Card>
  );
}
