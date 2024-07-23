import type { Meta, StoryObj } from '@storybook/react';

import MThemeSelector from './MThemeSelector';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof MThemeSelector> = {
  title: 'Atoms/Layout/MThemeSelector',
  component: MThemeSelector,
};

export default meta;
type Story = StoryObj<typeof MThemeSelector>;

export const Basic: Story = {
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    children: {
      control: { type: 'text' },
    },
  },

  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    return <MThemeSelector {...args} />;
  },
};
