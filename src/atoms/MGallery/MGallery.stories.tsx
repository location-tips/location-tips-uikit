import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import MGallery from './MGallery';
import MIcon from '../MIcon/MIcon';
import MButton from '../MButton/MButton';

const meta: Meta<typeof MGallery> = {
  title: 'Atoms/Visual/MGallery',
  component: MGallery,
};

export default meta;

type Story = StoryObj<typeof MGallery>;

export const Basic: Story = {
  args: {
    slides: [
      <img src="https://picsum.photos/200?random=1" />,
      <img src="https://picsum.photos/400?random=2" />,
      <img src="https://picsum.photos/200?random=3" />,
      <img src="https://picsum.photos/200?random=4" />,
      <img src="https://picsum.photos/200?random=5" />,
      <MButton>Click me</MButton>,
    ],
    header: ['Foo ', 'Bar ', 'Baz '],
    tools: [
      <MIcon
        catalog="Education"
        name="BookmarkSimple"
        mode="regular"
        width={24}
      />,
    ],
    footer: ['Foo ', 'Bar ', 'Baz '],
  },
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
};
