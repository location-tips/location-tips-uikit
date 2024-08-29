import React, { useState, useRef, useEffect, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './MExpandalbleText.module.css';

type MExpandableTextProps = {
  text: string;
  visibleLines?: number;
  lineHeight?: number;
  expanded?: boolean;
  collapseButton?: ReactNode;
};

const MExpandableText = ({
  text,
  visibleLines = 2,
  lineHeight,
  expanded = false,
  collapseButton = '△ Collapse',
}: MExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const computedlineHeight = lineHeight || 20;
      const calculatedMaxHeight = `${computedlineHeight * visibleLines}px`;
      setMaxHeight(calculatedMaxHeight);
    }
  }, [visibleLines]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={clsx(styles.expandableText, {
        [styles.expanded]: isExpanded,
      })}
    >
      <div
        ref={contentRef}
        className={styles.content}
        style={{
          maxHeight: isExpanded ? 'none' : maxHeight,
          lineHeight: lineHeight ? lineHeight + 'px' : 'normal',
        }}
      >
        {text}
      </div>
      {!isExpanded ? (
        <div
          style={{ height: `${lineHeight ? lineHeight : 20}px` }}
          className={styles.blurOverlay}
          onClick={toggleExpand}
        ></div>
      ) : (
        <span className={styles.collapseButton} onClick={toggleExpand}>
          {collapseButton}
        </span>
      )}
    </div>
  );
};

export default MExpandableText;
