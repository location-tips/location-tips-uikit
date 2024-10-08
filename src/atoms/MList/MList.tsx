import React, { ReactNode } from 'react';
import styles from './MList.module.css';
import MListItem, { ListItemProps } from '../MListItem/MListItem';

export type SelectOption = ListItemProps & {
  key: string;
  value: ReactNode;
};

type ListComponentProps = {
  options?: SelectOption[];
  showDivider?: boolean;
  noPadding?: boolean;
  onChoose?: (option: SelectOption) => void;
};
export const MList = ({
  options = [],
  showDivider = false,
  onChoose,
  noPadding = false,
}: ListComponentProps) => {
  return (
    <ul className={styles.listItems}>
      {options.map(({ key, ...option }) => (
        <MListItem
          noPadding={noPadding}
          key={key}
          onClick={() => onChoose?.({ key, ...option })}
          {...option}
          showDivider={showDivider}
        >
          {option.children || option.value}
        </MListItem>
      ))}
    </ul>
  );
};

export default MList;
