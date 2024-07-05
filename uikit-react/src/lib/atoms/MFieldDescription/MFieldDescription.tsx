import React from 'react';
import clsx from 'clsx';
import MText, { TextProps } from '../MText/MText';
import { TComponentStatus } from '../../types/TComponentStatus';
import styles from './MFieldDescription.module.css';

type MFieldDescriptionProps = Omit<TextProps, 'size'> &
  Partial<TComponentStatus>;

export const MFieldDescription = ({
  children,
  className,
  status = 'regular',
  ...restProps
}: MFieldDescriptionProps) => {
  return (
    <MText
      as="div"
      className={clsx(styles.fieldDescription, styles[status], className)}
      size="m"
      {...restProps}
    >
      {children}
    </MText>
  );
};

export default MFieldDescription;
