import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './MListItem.module.css';
import clsx from 'clsx';

export type ListItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  showDivider?: boolean;
  noPadding?: boolean;
};
export const MListItem = ({
  children,
  className,
  showDivider,
  noPadding = false,
  ...props
}: ListItemProps) => {
  return (
    <li
      className={clsx(styles.item, className, {
        [styles.itemBorder]: showDivider,
        [styles.noPadding]: noPadding,
      })}
      {...props}
    >
      {children}
    </li>
  );
};

export default MListItem;
