import type { Meta, StoryObj } from '@storybook/react';

import Palette from './Palette';

const meta: Meta<typeof Palette> = {
  title: 'Design System/Palette',
  component: Palette,
};

export default meta;
type Story = StoryObj<typeof Palette>;

export const Basic: Story = {
  args: {
    brand: 'whiteLabel',
  },

  argTypes: {
    brand: {
      options: ['whiteLabel', 'brand01', 'brand02'],
      control: { type: 'select' },
    },
  },
};
