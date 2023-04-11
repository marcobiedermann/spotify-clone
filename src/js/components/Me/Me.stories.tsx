import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Me from '.';
import meFixtures from './__fixtures__';

const meta: Meta<typeof Me> = {
  component: Me,
  args: meFixtures,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Me>;

const Default: Story = {};

export { Default };
export default meta;
