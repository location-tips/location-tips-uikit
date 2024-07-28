import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import MCard from '../MCard/MCard';
import clsx from 'clsx';
import styles from './MDropdown.module.css';

export type MDropdownProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  open: boolean;
  dropdownContent: ReactNode;
  position?: 'top' | 'bottom';
  align?: 'left' | 'right';
  stretch: boolean;
  noPadding?: boolean;
  dropdownContentClassName?: string;
};

export const MDropdown = ({
  children,
  open,
  position = 'bottom',
  align = 'left',
  stretch = false,
  dropdownContent,
  className,
  noPadding = false,
  dropdownContentClassName,
  ...props
}: MDropdownProps) => {
  return (
    <div className={clsx(styles.dropdownContainer)} {...props}>
      {children}
      <div
        className={clsx(styles.dropdown, { [styles.open]: open }, [
          styles[position],
          styles[align],
        ])}
      >
        <MCard
          noPadding={noPadding}
          className={clsx(
            { [styles.stretch]: stretch },
            dropdownContentClassName
          )}
        >
          {dropdownContent}
        </MCard>
      </div>
    </div>
  );
};

export default MDropdown;
