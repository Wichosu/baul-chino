import React from 'react';
import Link from 'next/link';
import {
  ButtonAllowedScale,
  ButtonAllowedTags,
  ButtonAllowedTypes,
  ButtonProps,
} from './Button.types';
import { twMerge } from 'tailwind-merge';

const allowedTags: ButtonAllowedTags[] = ['link', 'button'];
const allowedTypes: ButtonAllowedTypes[] = [
  'primary',
  'warning',
  'delete',
  'disabled',
  'yellow',
  'lightred',
  'lime',
];

const typeClass: Record<ButtonAllowedTypes, string> = {
  primary:
    'bg-blue-700 text-white cursor-pointer transition-colors hover:bg-blue-800 focus:bg-blue-800 focus:outline-4 focus:outline-gray-400 active:bg-blue-900',
  warning:
    'bg-amber-300 text-black cursor-pointer transition-colors hover:bg-amber-400 focus:bg-amber-400 focus:outline-4 focus:outline-gray-400 active:bg-amber-500',
  delete:
    'bg-red-700 text-white cursor-pointer transition-colors hover:bg-red-800 focus:bg-red-800 focus:outline-4 focus:outline-gray-400 active:bg-red-900',
  disabled:
    'bg-gray-300 text-gray-800 cursor-not-allowed transition-colors focus:outline-4 focus:outline-gray-400',
  yellow:
    'bg-yellow-700 text-white cursor-pointer transition-colors hover:bg-yellow-900 focus:bg-yellow-900 focus:outline-4 focus:outline-yellow-700 active:bg-yellow-950',
  lightred:
    'bg-red-500 text-white cursor-pointer transition-colors hover:bg-red-600 focus:bg-red-600 focus:outline-4 focus:outline-red-800 active:bg-red-700',
  lime: 'bg-lime-500 text-white cursor-pointer transition-colors hover:bg-lime-600 focus:bg-lime-600 focus:outline-4 focus:outline-lime-800 active:bg-lime-700',
};

const paddingClass: Record<ButtonAllowedScale, string> = {
  none: 'px-0 py-0',
  '1': 'px-2 py-1',
  '2': 'px-4 py-2',
  '3': 'px-6 py-3',
};

const marginClass: Record<ButtonAllowedScale, string> = {
  none: 'm-0',
  '1': 'm-2',
  '2': 'm-4',
  '3': 'm-6',
};

const roundedClass: Record<ButtonAllowedScale, string> = {
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
}: ButtonProps) {
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

  const className = twMerge(
    `${typeClass[type]} ${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} whitespace-nowrap`,
    props.className
  );

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
