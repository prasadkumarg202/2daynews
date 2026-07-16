import * as React from 'react';

/** Compact uppercase status badge: Breaking / Live / Exclusive / count. */
export interface BadgeProps {
  tone?: 'breaking' | 'live' | 'exclusive' | 'gold' | 'count' | 'success';
  /** Show pulsing dot (pair with tone="live") */
  live?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
