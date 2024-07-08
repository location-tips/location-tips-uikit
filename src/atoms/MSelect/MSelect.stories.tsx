import type { Meta, StoryObj } from '@storybook/react';

import MSelect from './MSelect';
import MFlex from '../MFlex/MFlex';
import MIcon from '../MIcon/MIcon';
import MText from '../MText/MText';
import React from 'react';

const meta: Meta<typeof MSelect> = {
  title: 'Atoms/Form/MSelect',
  component: MSelect,
};

const item = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={20}
    />
    <MText size={'m'}>List Item</MText>
  </MFlex>
);
const item1 = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Arrows"
      name="ArrowFatLinesRight"
      mode="regular"
      width={20}
    />
    <MText size={'m'}>List Item1</MText>
  </MFlex>
);
const item2 = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Arrows"
      name="ArrowFatLinesRight"
      mode="regular"
      width={20}
    />
    <MText size={'m'}>List Item2</MText>
  </MFlex>
);
export default meta;
type Story = StoryObj<typeof MSelect>;

export const Basic: Story = {
  args: {
    options: [
      {
        key: 'item1',
        value: item(),
        role: 'listitem',
      },
      {
        key: 'item2',
        value: item1(),
      },
      {
        key: 'item3',
        value: item2(),
      },
      {
        key: 'item4',
        value: item(),
      },
      {
        key: 'item5',
        value: item(),
      },
    ],
  },

  argTypes: {},
};
