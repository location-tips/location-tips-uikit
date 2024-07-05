import React, { useState } from 'react';
import styles from './MTabs.module.css';
import MFlex from '../MFlex/MFlex';
import MTab, { MTabProps } from '../MTab/MTab';

interface MTabsProps {
  items?: MTabProps[];
  defaultActiveKey: string;
  onChange: (key: string) => void;
}

export const MTabs: React.FC<MTabsProps> = ({
  items = [],
  defaultActiveKey,
  ...restProps
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <MFlex direction="column" align="start">
      <ul className={styles.tabHeaders}>
        {items.map((item) => (
          <MTab
            key={item.key}
            active={item.key === activeKey}
            label={item.label}
            disabled={item.disabled}
            onClick={() => handleTabClick(item.key)}
            before={item.before}
            after={item.after}
            {...restProps}
          />
        ))}
      </ul>

      <MFlex className={styles.tabContent}>
        {items.find((item) => item.key === activeKey)?.content}
      </MFlex>
    </MFlex>
  );
};

export default MTabs;
