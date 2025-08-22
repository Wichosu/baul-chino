import React, { HTMLAttributes } from 'react';
import Link from 'next/link';

type AllowedTags = 'link' | 'button';
type AllowedTypes = 'primary' | 'warning' | 'delete' | 'disabled';
type AllowedScale = 'none' | '1' | '2' | '3';
type AllowedTarget = '_blank' | '_self' | '_parent' | '_top';

type Props = {
  as?: AllowedTags;
  href?: string;
  target?: AllowedTarget;
  type?: AllowedTypes;
  padding?: AllowedScale;
  margin?: AllowedScale;
  rounded?: AllowedScale;
  ref?: React.RefObject<HTMLButtonElement & HTMLAnchorElement>;
  children: string | React.ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLAnchorElement>;

const allowedTags: AllowedTags[] = ['link', 'button'];
const allowedTypes: AllowedTypes[] = [
  'primary',
  'warning',
  'delete',
  'disabled',
];

const typeClass: Record<AllowedTypes, string> = {
  primary:
    'bg-blue-700 text-white cursor-pointer transition-all hover:bg-blue-800 focus:bg-blue-800 focus:outline-4 focus:outline-gray-400 active:bg-blue-900',
  warning:
    'bg-amber-300 text-black cursor-pointer transition-all hover:bg-amber-400 focus:bg-amber-400 focus:outline-4 focus:outline-gray-400 active:bg-amber-500',
  delete:
    'bg-red-700 text-white cursor-pointer transition-all hover:bg-red-800 focus:bg-red-800 focus:outline-4 focus:outline-gray-400 active:bg-red-900',
  disabled:
    'bg-gray-300 text-gray-800 cursor-not-allowed transition-all focus:outline-4 focus:outline-gray-400',
};

const paddingClass: Record<AllowedScale, string> = {
  none: 'px-0 py-0',
  '1': 'px-2 py-1',
  '2': 'px-4 py-2',
  '3': 'px-6 py-3',
};

const marginClass: Record<AllowedScale, string> = {
  none: 'm-0',
  '1': 'm-2',
  '2': 'm-4',
  '3': 'm-6',
};

const roundedClass: Record<AllowedScale, string> = {
  none: 'rounded-none',
  '1': 'rounded-md',
  '2': 'rounded-lg',
  '3': 'rounded-xl',
};

export function Button({
  as: Tag = 'button',
  href = '',
  target = '_blank',
  type = 'primary',
  padding = '2',
  margin = '1',
  rounded = '1',
  children,
  ref,
  ...props
}: Props) {
  if (!allowedTags.includes(Tag)) {
    throw new Error(
      `Tag ${Tag} is not allowed. The tags that are allowed are: ${allowedTags.join(
        ', '
      )}`
    );
  }

  if (!allowedTypes.includes(type)) {
    throw new Error(
      `Type ${type} is not allowed. The types that are allowed are: ${allowedTypes.join(
        ', '
      )}`
    );
  }

  if (Tag === 'link' && !href) {
    throw new Error('href is required when as is link');
  }

  if (Tag === 'button' && href) {
    throw new Error('href is not allowed when as is button');
  }

  if (typeof href !== typeof 'string') {
    throw new Error('href must be a string');
  }

  const className = `${props.className} ${typeClass[type]} ${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} whitespace-nowrap`;

  return Tag === 'link' ? (
    <Link
      {...props}
      href={href}
      target={target}
      className={className}
      ref={ref}
    >
      {children}
    </Link>
  ) : (
    <button
      {...props}
      className={className}
      aria-disabled={type === 'disabled'}
      ref={ref}
    >
      {children}
    </button>
  );
}
