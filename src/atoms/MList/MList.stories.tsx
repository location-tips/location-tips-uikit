import type { Meta, StoryObj } from '@storybook/react';

import MList from './MList';
import MFlex from '../MFlex/MFlex';
import MIcon from '../MIcon/MIcon';
import MText from '../MText/MText';
import React from 'react';

const meta: Meta<typeof MList> = {
  title: 'Atoms/Form/MList',
  component: MList,
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
    <MText size={'m'}>List Item</MText>
  </MFlex>
);
const item2 = () => (
  <MFlex gap="s">
    <MIcon catalog="Games" name="FinnTheHuman" mode="regular" width={20} />
    <MText size={'m'}>List Item</MText>
  </MFlex>
);

export default meta;
type Story = StoryObj<typeof MList>;

export const Basic: Story = {
  args: {
    showDivider: true,
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

  argTypes: {
    options: {
      control: {
        type: 'object',
      },
    },
    showDivider: {
      options: {
        control: {
          type: 'boolean',
        },
      },
    },
  },
};
