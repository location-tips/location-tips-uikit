import type { Meta, StoryObj } from '@storybook/react';

import MRadio from './MRadio';
import MIcon from '../MIcon/MIcon';
import MText from '../MText/MText';
import MFlex from '../MFlex/MFlex';
import React from 'react';

const meta: Meta<typeof MRadio> = {
  title: 'Atoms/Form/MRadio',
  component: MRadio,
};

export default meta;

const descriptionComponentContent = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={20}
    />
    <MText>Description</MText>
  </MFlex>
);

const errorComponentContent = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={20}
    />
    <MText>Error</MText>
  </MFlex>
);

type Story = StoryObj<typeof MRadio>;

const argTypes = {
  status: {
    control: {
      type: 'select',
    },
    options: ['regular', 'active', 'invalid'],
  },
  disabled: { control: { type: 'boolean' } },
  checked: { control: { type: 'boolean' } },
  label: {
    control: { type: 'text' },
  },
  description: {
    control: { type: 'text' },
  },
};

export const Regular: Story = {
  args: {
    status: 'regular',
    disabled: false,
    label: 'Radio',
    description: descriptionComponentContent(),
  },

  argTypes: argTypes,
};

export const Active: Story = {
  args: {
    status: 'valid',
    label: 'Radio',
    description: descriptionComponentContent(),
  },

  argTypes: argTypes,
};

export const Invalid: Story = {
  args: {
    status: 'invalid',
    label: 'Radio',
    description: errorComponentContent(),
  },

  argTypes: argTypes,
};

export const Disabled: Story = {
  args: {
    status: 'regular',
    disabled: true,
    checked: false,
    label: 'Radio',
    description: errorComponentContent(),
  },

  argTypes: argTypes,
};
