import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import styles from './MButton.module.css';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  mode?: 'primary' | 'secondary' | 'outlined' | 'transparent';
  after?: ReactNode;
  before?: ReactNode;
  stretch?: boolean;
};

export const MButton = ({
  children,
  className,
  mode = 'primary',
  stretch = false,
  after,
  before,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className, styles[mode], {
        [styles.stretch]: stretch,
      })}
      {...restProps}
    >
      {before && <span className={styles.before}>{before}</span>}
      <span className={styles.buttonContent}>{children}</span>
      {after && <span className={styles.after}>{after}</span>}
    </button>
  );
};

export default MButton
