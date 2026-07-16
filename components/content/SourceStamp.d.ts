import * as React from 'react';

/** Attribution line: source · location · relative time, with optional verified & AI-rewrite marks. */
export interface SourceStampProps {
  source?: string;
  /** Relative time, e.g. "12 min", "2 hr", "now" */
  time?: string;
  /** Hyperlocal location label, e.g. "Vijayawada" */
  location?: string;
  verified?: boolean;
  /** Flags AI-rewritten content per the platform's transparency rule */
  aiRewritten?: boolean;
  style?: React.CSSProperties;
}
export declare function SourceStamp(props: SourceStampProps): JSX.Element;
