import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import MGallery from './MGallery';
import { MIconBookmarkSimple } from '../MIcon/icons/MIconBookmarkSimple';
import MButton from '../MButton/MButton';
import MFlex from '../MFlex/MFlex';

const meta: Meta<typeof MGallery> = {
  title: 'Atoms/Visual/MGallery',
  component: MGallery,
};

export default meta;

type Story = StoryObj<typeof MGallery>;

const footer = (
  <MFlex direction="row" gap="l" justify="space-between">
    <div>A long long long long text</div>
    <div>@ 4.7</div>
  </MFlex>
);

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
    tools: [<MIconBookmarkSimple mode="regular" width={24} />],
    footer: [footer],
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
