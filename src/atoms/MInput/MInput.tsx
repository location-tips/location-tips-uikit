import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useMemo,
} from 'react';
import clsx from 'clsx';
import MLabel from '../MLabel/MLabel';
import MCaption from '../MCaption/MCaption';
import MFieldDescription from '../MFieldDescription/MFieldDescription';
import { TComponentStatus } from '../../types/TComponentStatus';
import MFlex from '../MFlex/MFlex';

import styles from './MInput.module.css';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Partial<TComponentStatus> & {
    after?: ReactNode;
    before?: ReactNode;
    wrapperClassName?: string;
    containerClassName?: string;
    label?: ReactNode;
    caption?: ReactNode;
    headingClassName?: string;
    description?: ReactNode;
    footerClassName?: string;
  };

export const MInput = ({
  status = 'regular',
  children,
  className,
  wrapperClassName,
  containerClassName,
  after,
  before,
  id,
  label,
  caption,
  headingClassName,
  description,
  footerClassName,
  ...restProps
}: InputProps) => {
  const uuid = useId();
  const fieldId = useMemo(() => id ?? uuid, [uuid, id]);

  return (
    <MFlex
      direction="column"
      align="start"
      className={clsx(styles.inputWrapper, styles[status], wrapperClassName)}
    >
      <MFlex
        justify="space-between"
        className={clsx(styles.inputHeading, headingClassName)}
      >
        {label && (
          <MLabel htmlFor={fieldId} status={status}>
            {label}
          </MLabel>
        )}
        {caption && <MCaption status={status}>{caption}</MCaption>}
      </MFlex>
      <MFlex className={clsx(styles.inputContainer, containerClassName)}>
        {before && (
          <MFlex align="center" className={styles.before}>
            {before}
          </MFlex>
        )}
        <input
          id={fieldId}
          className={clsx(styles.input, className)}
          {...restProps}
        />
        {after && (
          <MFlex align="center" className={styles.after}>
            {after}
          </MFlex>
        )}
      </MFlex>
      <div className={footerClassName}>
        {description && (
          <MFieldDescription status={status}>{description}</MFieldDescription>
        )}
      </div>
    </MFlex>
  );
};

export default MInput;
