import type { Meta, StoryObj } from '@storybook/react';

import MIcon, { IconModeIndex } from './MIcon';
import IconsCatalog from '../../icons/Icons.json';

const meta: Meta<typeof MIcon> = {
  title: 'Atoms/Typography/MIcon',
  component: MIcon,
};

export default meta;
type Story = StoryObj<typeof MIcon>;

export const Basic: Story = {
  args: {
    mode: 'regular',
    catalog: 'Arrows',
    name: 'ArrowArcLeft',
    width: 32,
  },
  argTypes: {
    mode: {
      options: Array.from(IconModeIndex.keys()),
      control: { type: 'select' },
    },
    catalog: {
      options: Object.keys(IconsCatalog),
      control: { type: 'select' },
    },
    name: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'number' },
    },
  },
};
