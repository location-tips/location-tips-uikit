import React, {
  InputHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useId,
  useMemo,
} from 'react';
import clsx from 'clsx';
import MFlex from '../MFlex/MFlex';
import MLabel from '../MLabel/MLabel';
import MFieldDescription from '../MFieldDescription/MFieldDescription';
import { TComponentStatus } from '../../types/TComponentStatus';

import styles from './MCheckbox.module.css';
import MIcon from '../MIcon/MIcon';

type ChexkboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Partial<TComponentStatus> & {
    label: ReactNode;
    description?: ReactNode;
    wrapperClassName?: string;
    footerClassName?: string;
    icon?: ReactNode;
  };

export const MCheckbox = ({
  id,
  name,
  status = 'regular',
  label,
  disabled = false,
  description,
  checked,
  wrapperClassName,
  footerClassName,
  icon,
  ...restProps
}: ChexkboxProps) => {
  const uuid = useId();
  const fieldId = useMemo(() => id ?? uuid, [uuid, id]);

  return (
    <MFlex
      direction="column"
      align="start"
      className={clsx(styles.checkboxWrapper, styles[status], wrapperClassName)}
    >
      <MFlex className={clsx(styles.checkboxContainer)}>
        <input
          type="checkbox"
          className={clsx(styles.Checkbox)}
          id={fieldId}
          name={name}
          checked={checked}
          disabled={disabled}
          {...restProps}
        />

        <MLabel htmlFor={fieldId}>{label}</MLabel>
        <span className={clsx(styles.customCheckboxIcon)}>
          {icon ? (
            icon
          ) : (
            <MIcon
              catalog="System & Devices"
              name="Check"
              mode="bold"
              width={10}
              color={status === 'invalid' ? '#dc2020' : '#ffffff'}
            />
          )}
        </span>
      </MFlex>
      <div className={footerClassName}>
        {description && (
          <MFieldDescription status={status}>{description}</MFieldDescription>
        )}
      </div>
    </MFlex>
  );
};

export default MCheckbox;
