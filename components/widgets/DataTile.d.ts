import * as React from 'react';

/**
 * Utility data tile for the ticker rail: gold/silver rates, Sensex/Nifty, weather, live cricket.
 * Values render in mono numerals; delta shows a colored up/down arrow.
 * @startingPoint section="Widgets" subtitle="Gold / market / weather / score tile" viewport="700x150"
 */
export interface DataTileProps {
  kind?: 'gold' | 'market' | 'weather' | 'cricket';
  /** Uppercase eyebrow label, e.g. "Gold 22K" */
  label?: string;
  /** Main figure, e.g. "₹71,240" or "34°" */
  value?: string | number;
  unit?: string;
  /** Secondary line, e.g. "per 10g · Hyderabad" */
  sub?: string;
  /** Signed change; positive → green ▲, negative → red ▼ */
  delta?: number;
  /** Optional icon node shown in a tinted disc (matches the reference tiles) */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DataTile(props: DataTileProps): JSX.Element;
