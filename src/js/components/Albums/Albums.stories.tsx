import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Albums from '.';
import albumFixtures from '../Album/__fixtures__';

const meta: Meta<typeof Albums> = {
  component: Albums,
  args: {
    items: [albumFixtures],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Albums>;

const Default: Story = {};

export { Default };
export default meta;
