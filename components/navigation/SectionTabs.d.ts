import * as React from 'react';
import { NewsCategory } from '../core/CategoryChip';

/** Scrollable category tab strip built from CategoryChips. */
export interface SectionTabsProps {
  /** Category keys, or {category,label} for localized labels */
  items?: (NewsCategory | { category: NewsCategory; label?: string })[];
  value?: NewsCategory;
  onChange?: (category: NewsCategory) => void;
  style?: React.CSSProperties;
}
export declare function SectionTabs(props: SectionTabsProps): JSX.Element;
