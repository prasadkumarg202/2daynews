import * as React from 'react';

/**
 * Full-width scrolling breaking-news marquee that sits under the app header.
 * @startingPoint section="Feedback" subtitle="Scrolling breaking-news ticker" viewport="700x80"
 */
export interface BreakingTickerProps {
  /** Angled tag label (default "Breaking") */
  label?: string;
  /** Headlines to scroll; duplicated internally for a seamless loop */
  items?: string[];
  style?: React.CSSProperties;
}
export declare function BreakingTicker(props: BreakingTickerProps): JSX.Element;
