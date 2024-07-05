import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import MCard from '../MCard/MCard';
import clsx from 'clsx';
import styles from './MDropdown.module.css';

type MDropdownProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  open: boolean;
  dropdownContent: ReactNode;
  position?: 'top' | 'bottom';
  align?: 'left' | 'right';
  stretch: boolean;
};

export const MDropdown = ({
  children,
  open,
  position = 'bottom',
  align = 'left',
  stretch = false,
  dropdownContent,
  className,
  ...props
}: MDropdownProps) => {
  return (
    <div className={clsx(styles.dropdownContainer)} {...props}>
      {children}
      <MCard
        className={clsx(
          styles.dropdown,
          { [styles.open]: open },
          [styles[position], styles[align]],
          { [styles.stretch]: stretch }
        )}
      >
        {dropdownContent}
      </MCard>
    </div>
  );
};

export default MDropdown;
