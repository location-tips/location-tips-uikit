import React, { ReactNode } from 'react';
import styles from './MList.module.css';
import MListItem, {
  ListItemProps,
} from '../MListItem/MListItem';

type SelectOption = ListItemProps & {
  key: string;
  value: ReactNode;
};

type ListComponentProps = {
  options?: SelectOption[];
  showDivider: boolean;
  onChoose?: (option: SelectOption) => void;
};
export const MList = ({ options = [], showDivider, onChoose }: ListComponentProps) => {
  return (
    <ul className={styles.listItems}>
      {options.map((option) => (
        <MListItem
          onClick={() => onChoose?.(option)}
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
