import React, {
  ReactNode,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { TComponentStatus } from '../../types/TComponentStatus';
import MFlex from '../MFlex/MFlex';
import MLabel from '../MLabel/MLabel';
import MCaption from '../MCaption/MCaption';
import MFieldDescription from '../MFieldDescription/MFieldDescription';

import styles from './MTextarea.module.css';

type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  Partial<TComponentStatus> & {
    header?: ReactNode;
    footer?: ReactNode;
    wrapperClassName?: string;
    containerClassName?: string;
    headerClassName?: string;
    textareaClassName?: string;
    footerClassName?: string;
    label?: ReactNode;
    caption?: ReactNode;
    counter?: boolean;
  };

export const MTextarea = ({
  status = 'regular',
  children,
  header,
  footer,
  wrapperClassName,
  containerClassName,
  headerClassName,
  textareaClassName,
  footerClassName,
  label,
  caption,
  counter,
  maxLength = 200,
  id,
  rows = 3,
  ...restProps
}: TextareaProps) => {
  const uuid = useId();
  const textareaId = useMemo(() => id ?? uuid, [uuid, id]);
  const [count, setCount] = useState(0);
  const charCounter = useRef<HTMLSpanElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const updateCount = () => {
    if (textarea.current) {
      setCount(textarea.current.value.length);
    }
  };

  return (
    <MFlex
      direction="column"
      align="start"
      gap="m"
      className={clsx(styles.textareaWrapper, styles[status], wrapperClassName)}
    >
      {header && (
        <div className={clsx(styles.textareaHeader, headerClassName)}>
          {header}
        </div>
      )}
      <div className={clsx(styles.textareaLabel)}>
        <MFlex justify="space-between">
          {label && (
            <MLabel htmlFor={textareaId} status={status}>
              {label}
            </MLabel>
          )}
          {caption && <MCaption status={status}>{caption}</MCaption>}
        </MFlex>
      </div>
      <MFlex
        className={clsx(
          styles.textareaContainer,
          counter && styles.hasCounter,
          containerClassName
        )}
      >
        <textarea
          ref={textarea}
          onInput={updateCount}
          id={textareaId}
          rows={rows}
          className={clsx(styles.textarea, textareaClassName)}
          maxLength={maxLength}
          {...restProps}
        />
        {counter && (
          <span ref={charCounter} className={clsx(styles.counter)}>
            {count}/{maxLength}
          </span>
        )}
      </MFlex>
      {footer && (
        <div className={clsx(styles.textareaFooter, footerClassName)}>
          <MFieldDescription status={status}>{footer}</MFieldDescription>
        </div>
      )}
    </MFlex>
  );
};

export default MTextarea;
