import * as React from 'react';

/**
 * Primary action button for tap2news. Vermillion brand fill by default.
 * @startingPoint section="Core" subtitle="Brand action button, 5 variants" viewport="700x160"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'soft' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon node (e.g. a Lucide <i data-lucide> or SVG) */
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Full-width */
  block?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function Button(props: ButtonProps): JSX.Element;
