import * as React from 'react';

export type NewsCategory = 'breaking' | 'national' | 'politics' | 'crime' | 'cinema' | 'sports'
  | 'business' | 'jobs' | 'weather' | 'astrology' | 'gold' | 'education' | 'health' | 'tech'
  | 'mynews' | 'finance' | 'cooking' | 'shorts'
  | 'district' | 'state' | 'international' | 'technology' | 'ott' | 'celebrity' | 'cricket'
  | 'religion' | 'lifestyle' | 'automobile' | 'travel' | 'agriculture' | 'factcheck' | 'opinion';

/**
 * Colored category chip — the core wayfinding token of the feed.
 * @startingPoint section="Core" subtitle="Color-coded category pill" viewport="700x120"
 */
export interface CategoryChipProps {
  category?: NewsCategory;
  /** Override the label (e.g. localized "రాజకీయాలు") */
  label?: string;
  /** Selected state in a tab strip — renders filled */
  active?: boolean;
  /** Force filled treatment regardless of active */
  solid?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function CategoryChip(props: CategoryChipProps): JSX.Element;
export declare const CATEGORY_COLORS: Record<NewsCategory, string>;
