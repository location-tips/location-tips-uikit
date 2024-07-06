import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import ReactDOMServer from 'react-dom/server';
import MDropdown from '../MDropdown/MDropdown';
import MIcon from '../MIcon/MIcon';
import MList from '../MList/MList';
import { ListItemProps } from '../MListItem/MListItem';
import { MButton } from '../MButton/MButton';

type SelectOption = ListItemProps & {
  key: string;
  value: ReactNode;
};
type SelectComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: SelectOption[];
  label?: ReactNode;
  description?: ReactNode;
};

const extractTextFromReactNode = (reactNode: ReactNode) => {
  // Convert the ReactNode to static markup (HTML string)
  const markup = ReactDOMServer.renderToStaticMarkup(<>{reactNode}</>);

  // parse the HTML string
  const doc = new DOMParser().parseFromString(markup, 'text/html');

  // get the text from the parsed document
  return doc.body.textContent || '';
};

export const MSelect = ({ options }: SelectComponentProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('default value');
  const handleClick = () => {
    setOpen(!open);
  };
  const onChoose = (option: SelectOption) => {
    setInputValue(extractTextFromReactNode(option.value));
  };

  const mappedOptions = useMemo(
    () => options.map((option) => ({ ...option, role: 'option' })),
    [options]
  );

  return (
    <MDropdown
      open={open}
      align={'right'}
      stretch
      dropdownContent={
        <MList showDivider options={mappedOptions} onChoose={onChoose} />
      }
    >
      <MButton
        stretch
        mode={'outlined'}
        onClick={handleClick}
        after={
          <MIcon catalog="Arrows" name="CaretDown" mode="regular" width={20} />
        }
      >
        {inputValue}
      </MButton>
    </MDropdown>
  );
};

export default MSelect;
