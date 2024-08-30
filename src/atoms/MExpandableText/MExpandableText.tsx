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

type MExpandableTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  visibleLines?: number;
  lineHeight?: number;
  expanded?: boolean;
  collapseButton?: ReactNode;
};

export const MExpandableText = ({
  children,
  visibleLines = 2,
  lineHeight = 20,
  expanded = false,
  collapseButton = '△ Collapse',
  ...restProps
}: MExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined);
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
      {!isExpanded ? (
        <div
          style={{
            height: `${lineHeight}px`,
            transition: 'opacity 0.3s ease-in-out',
          }}
          className={styles.blurOverlay}
          onClick={toggleExpand}
        ></div>
      ) : (
        <span
          className={styles.collapseButton}
          onClick={toggleExpand}
          style={{
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          {collapseButton}
        </span>
      )}
    </div>
  );
};

export default MExpandableText;
