import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './MTab.module.css';

export interface MTabProps {
  key: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  content?: ReactNode;
  disabled?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

export const MTab: React.FC<MTabProps> = ({
  label,
  active,
  onClick,
  disabled,
  before,
  after,
}) => {
  return (
    <li
      className={clsx(styles.tab, {
        [styles.activeTab]: active,
        [styles.disabledTab]: disabled,
      })}
      onClick={() => !disabled && onClick && onClick()}
    >
      {before && <span className={styles.before}>{before}</span>}
      {label}
      {after && <span className={styles.after}>{after}</span>}
    </li>
  );
};

export default MTab;
