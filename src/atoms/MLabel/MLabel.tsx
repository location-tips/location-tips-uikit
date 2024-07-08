import React from 'react';
import clsx from 'clsx';
import MText from '../MText/MText';
import styles from './MLabel.module.css';

type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const MLabel = ({ children, className, ...restProps }: LabelProps) => {
  return (
    <label className={clsx(styles.label, className)} {...restProps}>
      <MText as="div" size="l">
        {children}
      </MText>
    </label>
  );
};

export default MLabel;
