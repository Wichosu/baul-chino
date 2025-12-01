import { HTMLAttributes } from 'react';

export type ButtonAllowedTags = 'link' | 'button';
export type ButtonAllowedTypes =
  | 'primary'
  | 'warning'
  | 'delete'
  | 'disabled'
  | 'yellow'
  | 'lightred'
  | 'lime';
export type ButtonAllowedScale = 'none' | '1' | '2' | '3';
export type ButtonAllowedTarget = '_blank' | '_self' | '_parent' | '_top';

export type ButtonProps = {
  as?: ButtonAllowedTags;
  href?: string;
  target?: ButtonAllowedTarget;
  type?: ButtonAllowedTypes;
  padding?: ButtonAllowedScale;
  margin?: ButtonAllowedScale;
  rounded?: ButtonAllowedScale;
  ref?: React.RefObject<HTMLButtonElement & HTMLAnchorElement>;
  children: string | React.ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLAnchorElement>;
