import React, { useMemo } from 'react';
import clsx from 'clsx';
import styles from './MText.module.css';
import { TComponentSize } from '../../types/TComponentSize';

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> &
  Partial<TComponentSize> & {
    as?: 'span' | 'p' | 'div';
  };

export const MText = ({
  children,
  className,
  size = 'inherit',
  as = 'span',
  ...restProps
}: TextProps) => {
  return React.createElement(
    as,
    {
      className: clsx(styles.text, styles[`size-${size}`], className),
      ...restProps,
    },
    children
  );
};

export default MText;
