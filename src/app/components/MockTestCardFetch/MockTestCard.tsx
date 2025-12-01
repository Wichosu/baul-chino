import React from 'react';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';
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

export function MockTestCard({ title, tests }: Props) {
  return (
    <Card as='article' padding='3'>
      <h3 className='text-2xl font-medium text-center'>{title}</h3>
      <div className='flex flex-col'>
        {tests?.map(({ id, name }) => (
          <Button
            key={id}
            type='yellow'
            as='link'
            href={`/hsk-mock-test/${id}`}
            target='_self'
          >
            {name}
          </Button>
        ))}
      </div>
    </Card>
  );
}
