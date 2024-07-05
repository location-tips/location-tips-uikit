import type { Meta, StoryObj } from '@storybook/react';
import MText from '../MText/MText';
import MFlex from '../MFlex/MFlex';

import MCheckbox from './MCheckbox';
import React from 'react';
import MIcon from '../MIcon/MIcon';

const meta: Meta<typeof MCheckbox> = {
  title: 'Atoms/Form/MCheckbox',
  component: MCheckbox,
};

export default meta;

const labelComponentContent = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={24}
    />
    <MText>Label</MText>
  </MFlex>
);

const descriptionComponentContent = () => (
  <MFlex gap="s">
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={16}
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
      width={16}
    />
    <MText>Error</MText>
  </MFlex>
);

type Story = StoryObj<typeof MCheckbox>;

const argTypes = {
  status: {
    control: {
      type: 'select',
    },
    options: ['regular', 'invalid'],
  },
  disabled: { control: { type: 'boolean' } },
  label: {
    control: { type: 'text' },
  },
  description: {
    control: { type: 'text' },
  },
  icon: {
    control: { type: 'text' },
  },
};

export const Regular: Story = {
  args: {
    disabled: false,
    label: labelComponentContent(),
    description: descriptionComponentContent(),
    status: 'regular',
  },

  argTypes: argTypes,
};

export const Valid: Story = {
  args: {
    disabled: false,
    label: labelComponentContent(),
    description: descriptionComponentContent(),
    status: 'valid',
  },

  argTypes: argTypes,
};

export const Invalid: Story = {
  args: {
    disabled: false,
    label: labelComponentContent(),
    description: errorComponentContent(),
    status: 'invalid',
  },

  argTypes: argTypes,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: labelComponentContent(),
    description: descriptionComponentContent(),
    status: 'regular',
    checked: true,
  },

  argTypes: argTypes,
};
