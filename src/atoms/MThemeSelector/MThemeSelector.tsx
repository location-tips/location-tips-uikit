import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import MCard from '../MCard/MCard';
import MText from '../MText/MText';
import MList from '../MList/MList';
import MFlex from '../MFlex/MFlex';
import MButton from '../MButton/MButton';
import clsx from 'clsx';
import styles from './MThemeSelector.module.css';

type MThemeSelectorProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  position?: 'top' | 'bottom';
  align?: 'left' | 'right';
  stretch: boolean;
};

export const MThemeSelector = ({
  children,
  position = 'bottom',
  align = 'left',
  stretch = false,
  className,
  ...props
}: MThemeSelectorProps) => {
  const [selectedItemText, setSelectedItemText] = useState('');
  const [open, setOpen] = useState(false);
  const onListItemChoose = (value: any) => {
    setSelectedItemText(value.value);
    setOpen(false);
  };

  function onClick() {
    setOpen(!open);
  }
  return (
    <div className={clsx(styles.dropdownContainer)} {...props}>
      <MFlex justify="start">
        <MButton onClick={onClick}>Select theme</MButton>
        <MText>{selectedItemText}</MText>
      </MFlex>
      <MCard
        className={clsx(
          styles.dropdown,
          { [styles.open]: open },
          [styles[position], styles[align]],
          { [styles.stretch]: stretch }
        )}
      >
        <MList
          options={[
            {
              key: 'light',
              value: 'light',
            },
            {
              key: 'dark',
              value: 'dark',
            },
          ]}
          showDivider
          onChoose={onListItemChoose}
        />
      </MCard>
    </div>
  );
};

export default MThemeSelector;
