import clsx from 'clsx';
import React from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import style from './MDivider.module.css';

type MDividerProp = DetailedHTMLProps<
  HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
> & {};

export const MDivider = ({ className, ...htmlProps }: MDividerProp) => {
  return <hr className={clsx(style.divider, className)} {...htmlProps} />;
};

export default MDivider;
