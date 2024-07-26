import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './MBadge.module.css';

type BadgeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  mode: 'primary' | 'transparent';
  before?: ReactNode;
};

export const MBadge = ({
  children,
  mode = 'primary',
  ...restProps
}: BadgeProps) => {
  return (
    <div className={clsx(styles.badge, styles[mode])} {...restProps}>
      {children}
    </div>
  );
};

export default MBadge;
