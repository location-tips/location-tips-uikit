import type { Meta, StoryObj } from '@storybook/react';

import MTab from './MTab';
import MIcon from '../MIcon/MIcon';
import React from 'react';

const meta: Meta<typeof MTab> = {
  title: 'Atoms/Form/MTab',
  component: MTab,
};

export default meta;
type Story = StoryObj<typeof MTab>;
const icon = () => (
  <MIcon
    catalog="Development"
    name="BracketsSquare"
    mode="regular"
    width={20}
  />
);
export const Basic: Story = {
  args: {
    label: 'example tab',
    disabled: false,
    before: icon(),
    after: icon(),
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    before: {
      control: { type: 'text' },
    },
    after: {
      control: { type: 'text' },
    },
  },
};
