import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MSwitch from './MSwitch';
import MIcon from '../MIcon/MIcon';

const meta: Meta<typeof MSwitch> = {
  title: 'Atoms/Form/MSwitch',
  component: MSwitch,
};

export default meta;

const leftIconContent = () => (
  <MIcon catalog="System & Devices" name="Check" mode="bold" width={10} />
);

const argTypes = {
  borderType: {
    control: { type: 'select' },
    options: ['round', 'rectangular'],
  },
  disabled: {
    control: { type: 'boolean' },
  },
  leftIcon: {
    control: { type: 'text' },
  },
  rightIcon: {
    control: { type: 'text' },
  },
};

type Story = StoryObj<typeof MSwitch>;

export const Regular: Story = {
  args: {
    disabled: false,
    leftIcon: leftIconContent(),
  },

  argTypes,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  argTypes,
};
