import React, {
  useState,
  useRef,
  useEffect,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import clsx from 'clsx';
import styles from './MExpandalbleText.module.css';
import { MButton } from '../MButton/MButton';
import { MFlex } from '../MFlex/MFlex';

type MExpandableTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  visibleLines?: number;
  lineHeight?: number;
  defaultExpanded?: boolean;
  expandButtonContent?: ReactNode;
  collapseButtonContent?: ReactNode;
};

export const MExpandableText = ({
  children,
  visibleLines = 2,
  lineHeight = 20,
  defaultExpanded = false,
  expandButtonContent,
  collapseButtonContent,
  ...restProps
}: MExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [maxHeight, setMaxHeight] = useState<string>(
    `${lineHeight * visibleLines}px`
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const calculatedMaxHeight = `${lineHeight * visibleLines}px`;
      setMaxHeight(calculatedMaxHeight);
    }
  }, [visibleLines, lineHeight]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MFlex direction="column" gap="s" align="center">
      <div className={clsx(styles.expandableText)}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{
            maxHeight: isExpanded
              ? `${contentRef.current?.scrollHeight}px`
              : maxHeight,
            lineHeight: `${lineHeight}px`,
            transition: 'max-height 0.3s ease-in-out',
          }}
          {...restProps}
        >
          {children}
        </div>
        {!isExpanded && (
          <div
            style={{
              height: `${lineHeight}px`,
              transition: 'opacity 0.3s ease-in-out',
            }}
            className={styles.blurOverlay}
          ></div>
        )}
      </div>
      {!isExpanded ? (
        <MButton size="m" mode="transparent" onClick={toggleExpand}>
          {expandButtonContent ?? (
            <span className={styles.defaultButton}>Expand</span>
          )}
        </MButton>
      ) : (
        <MButton size="m" onClick={toggleExpand} mode="transparent">
          {collapseButtonContent ?? (
            <span className={styles.defaultButton}>Collapse</span>
          )}
        </MButton>
      )}
    </MFlex>
  );
};

export default MExpandableText;
