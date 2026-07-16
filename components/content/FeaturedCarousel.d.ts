import * as React from 'react';
import { NewsCategory } from '../core/CategoryChip';

export interface FeaturedItem {
  headline: string;
  /** Region/section tag shown top-left, e.g. "Telangana" */
  region?: string;
  /** Relative time, e.g. "11:37 PM" or "1 hr" */
  time?: string;
  /** Read estimate, e.g. "1 min read" */
  read?: string;
  /** Image URL; omit for a category-tinted T2 placeholder */
  image?: string;
  category?: NewsCategory;
}

/**
 * Swipeable featured-stories gallery: full-bleed hero, region tag, counter,
 * prev/next arrows, headline overlay and dot pagination. Sits atop the feed.
 * @startingPoint section="Content" subtitle="Featured story carousel" viewport="700x300"
 */
export interface FeaturedCarouselProps {
  items?: FeaturedItem[];
  /** Hero height in px (default 230) */
  height?: number;
  autoPlay?: boolean;
  /** Autoplay ms (default 5000) */
  interval?: number;
  onOpen?: (item: FeaturedItem, index: number) => void;
  style?: React.CSSProperties;
}
export declare function FeaturedCarousel(props: FeaturedCarouselProps): JSX.Element;
