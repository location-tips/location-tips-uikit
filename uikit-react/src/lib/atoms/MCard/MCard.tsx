import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import MHeading from '../MHeading/MHeading';
import style from './MCard.module.css';
import MFlex from '../MFlex/MFlex';
import MDivider from '../MDivider/MDivider';

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
  onClick?: () => void;
  shadow?: boolean;
  collapsed?: boolean;
};

const MCard = ({
                 header,
                 footer,
                 className,
                 children,
                 headerClassName,
                 contentClassName,
                 footerClassName,
                 showHeaderDivider = false,
                 showFooterDivider = false,
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
        },
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
