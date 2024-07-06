import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useMemo,
} from 'react';
import clsx from 'clsx';
import MFieldDescription from '../MFieldDescription/MFieldDescription';
import { TComponentStatus } from '../../types/TComponentStatus';
import MFlex from '../MFlex/MFlex';

import styles from './MRadio.module.css';
import MLabel from '../MLabel/MLabel';

type RadioProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Partial<TComponentStatus> & {
    wrapperClassName?: string;
    containerClassName?: string;
    label?: ReactNode;
    description?: ReactNode;
    footerClassName?: string;
  };

export const MRadio = ({
  status = 'regular',
  children,
  className,
  wrapperClassName,
  containerClassName,
  id,
  label,
  description,
  footerClassName,
  ...restProps
}: RadioProps) => {
  const uuid = useId();
  const fieldId = useMemo(() => id ?? uuid, [uuid, id]);

  return (
    <MFlex direction="column" align="start">
      <MLabel
        className={clsx(
          styles.inputContainer,
          styles[status],
          containerClassName
        )}
      >
        <MFlex>
          <input
            type="radio"
            id={fieldId}
            className={clsx(styles.input, styles[status], className)}
            {...restProps}
          />
          {label}
        </MFlex>
      </MLabel>

      <div className={footerClassName}>
        {description && (
          <MFieldDescription status={status}>{description}</MFieldDescription>
        )}
      </div>
    </MFlex>
  );
};

export default MRadio;
