import React from 'react';
import Link from 'next/link';
import {
  ButtonAllowedScale,
  ButtonAllowedTags,
  ButtonAllowedTypes,
  ButtonProps,
} from './Button.types';
import { twMerge } from 'tailwind-merge';
import { roundedClass } from '../scales';

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
  // one accent: primary and yellow are the same brass, kept as two names so
  // existing call sites keep working. warning is the quiet variant, signal is
  // destructive, success is for correct-answer feedback only.
  primary:
    'bg-brass text-white cursor-pointer transition-colors hover:bg-brass-deep focus:bg-brass-deep active:bg-[#553409]',
  warning:
    'bg-brass-tint text-brass-deep cursor-pointer transition-colors hover:bg-[#e9dbc0] focus:bg-[#e9dbc0] active:bg-[#e0cfae]',
  delete:
    'bg-signal text-white cursor-pointer transition-colors hover:bg-[#8e1c16] focus:bg-[#8e1c16] active:bg-[#7a1712]',
  disabled:
    'bg-line text-ink-2 cursor-not-allowed transition-colors',
  yellow:
    'bg-brass text-white cursor-pointer transition-colors hover:bg-brass-deep focus:bg-brass-deep active:bg-[#553409]',
  lightred:
    'bg-signal text-white cursor-pointer transition-colors hover:bg-[#8e1c16] focus:bg-[#8e1c16] active:bg-[#7a1712]',
  lime: 'bg-success text-white cursor-pointer transition-colors hover:bg-[#12512a] focus:bg-[#12512a] active:bg-[#0f4322]',
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

export function Button({
  as: Tag = 'button',
  href = '',
  target = '_self',
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

  //min-h-11 (44px) is the minimum comfortable touch target; inline-flex keeps
  //both the <button> and the <Link> render centered at that height
  const className = twMerge(
    `${typeClass[type]} ${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} min-h-11 inline-flex items-center justify-center whitespace-nowrap`,
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
