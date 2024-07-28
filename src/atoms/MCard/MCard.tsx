import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import MHeading from '../MHeading/MHeading';
import style from './MCard.module.css';
import MFlex from '../MFlex/MFlex';
import MDivider from '../MDivider/MDivider';
import { TComponentSize } from '../../types/TComponentSize';

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header?: ReactNode;
  footer?: ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  showHeaderDivider?: boolean;
  showFooterDivider?: boolean;
  noPadding?: boolean;
  borderLeftTopRadius?:
    | Extract<
        TComponentSize['size'],
        's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
      >
    | 'none';
  borderRightTopRadius?:
    | Extract<
        TComponentSize['size'],
        's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
      >
    | 'none';
  borderLeftBottomRadius?:
    | Extract<
        TComponentSize['size'],
        's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
      >
    | 'none';
  borderRightBottomRadius?:
    | Extract<
        TComponentSize['size'],
        's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
      >
    | 'none';
  onClick?: () => void;
  shadow?: boolean;
  collapsed?: boolean;
};

export const MCard = ({
  header,
  footer,
  className,
  children,
  headerClassName,
  contentClassName,
  footerClassName,
  showHeaderDivider = false,
  showFooterDivider = false,
  noPadding = false,
  borderLeftBottomRadius = 'l',
  borderLeftTopRadius = 'l',
  borderRightBottomRadius = 'l',
  borderRightTopRadius = 'l',
  shadow = true,
  collapsed = false,
  ...htmlProps
}: CardProps) => {
  return (
    <MFlex
      direction="column"
      gap="l"
      justify="stretch"
      align="start"
      className={clsx(
        style.card,
        {
          [style.shadow]: shadow,
          [style.noPadding]: noPadding,
        },
        style[`borderLeftBottomRadius_${borderLeftBottomRadius}`],
        style[`borderLeftTopRadius_${borderLeftTopRadius}`],
        style[`borderRightBottomRadius_${borderRightBottomRadius}`],
        style[`borderRightTopRadius_${borderRightTopRadius}`],
        className
      )}
      {...htmlProps}
    >
      {header && (
        <header className={clsx(style.header, headerClassName)}>
          <MFlex direction="column" justify="end" gap="l" align="stretch">
            {typeof header === 'string' ? (
              <MHeading mode="h3">{header}</MHeading>
            ) : (
              header
            )}

            {showHeaderDivider && !collapsed && <MDivider />}
          </MFlex>
        </header>
      )}
      <div
        className={clsx(style.content, contentClassName, {
          [style.collapsed]: collapsed,
        })}
      >
        {children}
      </div>
      {footer && (
        <footer className={clsx(style.footer, footerClassName)}>
          <MFlex direction="column" justify="end" gap="l" align="stretch">
            {showFooterDivider && <MDivider />}
            {footer}
          </MFlex>
        </footer>
      )}
    </MFlex>
  );
};

export default MCard;
