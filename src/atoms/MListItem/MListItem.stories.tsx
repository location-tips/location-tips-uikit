import type { Meta, StoryObj } from '@storybook/react';
import MListItem from './MListItem';
import MFlex from '../MFlex/MFlex';
import MIcon from '../MIcon/MIcon';
import MText from '../MText/MText';
import React from 'react';

const meta: Meta<typeof MListItem> = {
  title: 'Atoms/Form/MListItem',
  component: MListItem,
};

export default meta;
type Story = StoryObj<typeof MListItem>;
const item = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={20}
    />
    <MText>List Item</MText>
  </MFlex>
);
export const Basic: Story = {
  args: {
    children: item(),
  },

  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};
