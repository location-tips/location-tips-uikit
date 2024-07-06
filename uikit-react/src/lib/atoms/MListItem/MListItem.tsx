import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './MListItem.module.css';
import clsx from 'clsx';

export type ListItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  showDivider?: boolean;
};
export const MListItem = ({
  children,
  className,
  showDivider,
  ...props
}: ListItemProps) => {
  return (
    <li
      className={clsx(styles.item, className, {
        [styles.itemBorder]: showDivider,
      })}
      {...props}
    >
      {children}
    </li>
  );
};

export default MListItem;
