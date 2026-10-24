import React from 'react';

type Props = {
  title: string;
  message: string;
  //optional action, e.g. a clear-filters button
  children?: React.ReactNode;
};

//presentational only, so it works in both server and client components;
//callers pass translated copy (see Common.Empty in messages/)
export function EmptyState({ title, message, children }: Props) {
  return (
    <div className='flex flex-col items-center gap-2 my-8 px-4 py-10 text-center rounded-lg border border-dashed border-border bg-muted/40'>
      <p className='text-xl font-medium'>{title}</p>
      <p className='text-muted-foreground'>{message}</p>
      {children && <div className='mt-2'>{children}</div>}
    </div>
  );
}
