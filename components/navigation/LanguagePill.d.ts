import * as React from 'react';

/**
 * Language selector pill (script glyph + native name). The top-level control of the
 * whole app — selecting a language re-geo-fences every downstream section.
 * @startingPoint section="Navigation" subtitle="Language / script selector" viewport="700x110"
 */
export interface LanguagePillProps {
  /** ISO-ish code with built-in native label: te|ta|kn|ml|hi|en */
  code?: 'te' | 'ta' | 'kn' | 'ml' | 'hi' | 'en';
  /** Override native name */
  native?: string;
  /** Override the glyph shown in the disc */
  glyph?: string;
  active?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function LanguagePill(props: LanguagePillProps): JSX.Element;
