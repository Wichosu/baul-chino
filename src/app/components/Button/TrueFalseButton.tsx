'use client';
import React, { HTMLAttributes } from 'react';
import { Button } from './Button';
import { X, Check } from 'lucide-react';

type Props = {
  type: 'true' | 'false';
  onClick: () => void;
} & Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> &
  Omit<HTMLAttributes<HTMLAnchorElement>, 'onClick'>;

export function TrueFalseButton({ type, onClick, ...props }: Props) {
  const [selected, setSelected] = React.useState<boolean>(false);

  return (
    <>
      {type === 'true' && (
        <Button
          type='lime'
          onClick={() => {
            setSelected((prev) => !prev);
            console.log(!selected);
            onClick();
          }}
          className={`${selected ? 'opacity-100' : 'opacity-30'}`}
          {...props}
        >
          <Check />
        </Button>
      )}
      {type === 'false' && (
        <Button
          type='lightred'
          onClick={() => {
            setSelected((prev) => !prev);
            onClick();
          }}
          className={`${selected ? 'opacity-100' : 'opacity-30'}`}
          {...props}
        >
          <X />
        </Button>
      )}
    </>
  );
}
