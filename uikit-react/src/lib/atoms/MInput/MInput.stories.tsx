import type { Meta, StoryObj } from '@storybook/react';

import MInput from './MInput';
import MIcon from '../MIcon/MIcon';
import React from 'react';
import MText from '../MText/MText';
import MFlex from '../MFlex/MFlex';

const meta: Meta<typeof MInput> = {
  title: 'Atoms/Form/MInput',
  component: MInput,
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

const captionComponentContent = () => (
  <MFlex gap="s">
    <MText>Caption</MText>
    <MIcon
      catalog="Development"
      name="BracketsSquare"
      mode="regular"
      width={16}
    />
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

type Story = StoryObj<typeof MInput>;

const argTypes = {
  status: {
    control: {
      type: 'select',
    },
    options: ['regular', 'valid', 'invalid'],
  },
  disabled: { control: { type: 'boolean' } },
  before: {
    control: { type: 'text' },
  },
  placeholder: {
    control: { type: 'text' },
  },
  after: {
    control: { type: 'text' },
  },
  label: {
    control: { type: 'text' },
  },
  caption: {
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
    children: 'BUTTON',
    before: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    after: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    placeholder: 'Placeholder',
    label: labelComponentContent(),
    caption: captionComponentContent(),
    description: descriptionComponentContent(),
  },

  argTypes: argTypes,
};

export const Valid: Story = {
  args: {
    status: 'valid',
    disabled: false,
    children: 'BUTTON',
    before: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    after: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    placeholder: 'Placeholder',
    label: labelComponentContent(),
    caption: captionComponentContent(),
    description: descriptionComponentContent(),
  },

  argTypes: argTypes,
};

export const Invalid: Story = {
  args: {
    status: 'invalid',
    disabled: false,
    children: 'BUTTON',
    before: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    after: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    placeholder: 'Placeholder',
    label: labelComponentContent(),
    caption: captionComponentContent(),
    description: errorComponentContent(),
  },

  argTypes: argTypes,
};

export const Disabled: Story = {
  args: {
    status: 'regular',
    disabled: true,
    children: 'BUTTON',
    before: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    after: (
      <MIcon
        catalog="Development"
        name="BracketsSquare"
        mode="regular"
        width={24}
      />
    ),
    placeholder: 'Placeholder',
    label: labelComponentContent(),
    caption: captionComponentContent(),
    description: errorComponentContent(),
  },

  argTypes: argTypes,
};
