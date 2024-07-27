import React from 'react';
import clsx from 'clsx';
import MText from '../MText/MText';
import styles from './MLabel.module.css';
import { TComponentStatus } from '../../types/TComponentStatus';

type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  Partial<TComponentStatus>;

export const MLabel = ({
  children,
  className,
  status = 'regular',
  ...restProps
}: LabelProps) => {
  return (
    <label
      className={clsx(styles.label, styles[status], className)}
      {...restProps}
    >
      <MText as="div" size="l">
        {children}
      </MText>
    </label>
  );
};

export default MLabel;
