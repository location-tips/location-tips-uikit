import React from 'react';
import clsx from 'clsx';
import MText, { TextProps } from '../MText/MText';
import styles from './MCaption.module.css';

type CaptionProps = Omit<TextProps, 'size'>;

export const MCaption = ({
  children,
  className,
  ...restProps
}: CaptionProps) => {
  return (
    <MText size="m" className={clsx(styles.caption, className)} {...restProps}>
      {children}
    </MText>
  );
};

export default MCaption;
