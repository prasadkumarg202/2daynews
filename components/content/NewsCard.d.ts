import * as React from 'react';
import { NewsCategory } from '../core/CategoryChip';

/**
 * The primary feed story card. Three layouts cover the whole feed rhythm.
 * @startingPoint section="Content" subtitle="Feed story card (row / hero / compact)" viewport="700x260"
 */
export interface NewsCardProps {
  headline?: string;
  /** 2-line dek shown in row/hero layouts */
  summary?: string;
  category?: NewsCategory;
  source?: string;
  time?: string;
  location?: string;
  /** Image URL; omit for the T2 monogram placeholder */
  image?: string;
  /** row = thumb on right (default); hero = full-bleed image on top; compact = text only */
  layout?: 'row' | 'hero' | 'compact';
  /** Replaces the category chip with a pulsing Breaking badge */
  breaking?: boolean;
  verified?: boolean;
  aiRewritten?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function NewsCard(props: NewsCardProps): JSX.Element;
