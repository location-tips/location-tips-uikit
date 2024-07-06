import type { Meta, StoryObj } from '@storybook/react';

import MFlex from './MFlex';
import React from 'react';
import MIcon from '../MIcon/MIcon';

const meta: Meta<typeof MFlex> = {
    title: 'Atoms/Layout/MFlex',
    component: MFlex,
};

export default meta;
type Story = StoryObj<typeof MFlex>;

export const Basic: Story = {
    args: {
        gap: 's',
        direction: 'row',
        align: 'center',
        justify: 'start',
        wrap: 'wrap',
        children: <><MIcon catalog="Games" name="DiceOne" mode="regular" width={24} /><MIcon catalog="Games" name="DiceTwo" mode="regular" width={24} /><MIcon catalog="Games" name="DiceThree" mode="regular" width={24} /></>,
    },

    argTypes: {
        gap: {
          control: { type: 'select' },
          options: ['xs', 's', 'm', 'l', 'xl', '3xl', '4xl'],
        },
        direction: {
          control: { type: 'select' },
          options: ['row', 'column'],
        },
        align: {
          control: { type: 'select' },
          options: ['start', 'center', 'end', 'stretch'],
        },
        justify: {
          control: { type: 'select' },
          options: ['start', 'center', 'end', 'space-between', 'space-around'],
        },
        wrap: {
          control: { type: 'select' },
          options: ['wrap', 'nowrap'],
        },
      },
  };
