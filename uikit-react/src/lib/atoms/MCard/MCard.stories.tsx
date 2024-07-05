import type { Meta, StoryObj } from '@storybook/react';

import MCard from './MCard';
import MText from '../MText/MText';
import MFlex from '../MFlex/MFlex';
import MButton from '../MButton/MButton';
import React from 'react';

const meta: Meta<typeof MCard> = {
  title: 'Atoms/Layout/MCard',
  component: MCard,
};

export default meta;
type Story = StoryObj<typeof MCard>;

export const Basic: Story = {
  args: {
    children: <MText>Card content</MText>,
    header: 'Title',
    showHeaderDivider: false,
    showFooterDivider: true,
    shadow: true,
    collapsed: false,
    footer: (
      <MFlex justify="space-between">
        <MText>Footer content</MText>
        <MFlex gap="xl" justify="end">
          <MButton mode="primary">Primary</MButton>
          <MButton mode="secondary">Secondary</MButton>
        </MFlex>
      </MFlex>
    ),
  },

  argTypes: {
    children: {
      control: { type: 'text' },
    },
    header: {
      control: { type: 'text' },
    },
    footer: {
      control: { type: 'text' },
    },
    collapsed: { control: { type: 'boolean' } },
    shadow: { control: { type: 'boolean' } },
    showHeaderDivider: { control: { type: 'boolean' } },
    showFooterDivider: { control: { type: 'boolean' } },
  },
};
