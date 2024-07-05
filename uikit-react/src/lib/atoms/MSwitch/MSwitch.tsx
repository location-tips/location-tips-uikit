import React, {
  InputHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useId,
  useMemo,
} from 'react';
import MFlex from '../MFlex/MFlex';
import clsx from 'clsx';

import styles from './MSwitch.module.css';

type SwitchProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  borderType?: 'round' | 'rectangular';
};

export const MSwitch = ({
  disabled,
  id,
  name,
  checked,
  leftIcon,
  rightIcon,
  borderType = 'round',
  ...restProps
}: SwitchProps) => {
  const uuid = useId();
  const fieldId = useMemo(() => id ?? uuid, [uuid, id]);

  return (
    <MFlex className={styles.switchWrapper}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          className={clsx(styles.Checkbox)}
          id={fieldId}
          name={name}
          checked={checked}
          disabled={disabled}
          {...restProps}
        />

        <span className={clsx(styles.slider, styles[borderType])}>
          {leftIcon && (
            <span className={clsx(styles.customSwitchIconLeft)}>
              {leftIcon}
            </span>
          )}

          {rightIcon && (
            <span className={clsx(styles.customSwitchIconRight)}>
              {rightIcon}
            </span>
          )}
        </span>
      </label>
    </MFlex>
  );
};

export default MSwitch;
