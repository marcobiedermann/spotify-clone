import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  args: {
    items: [
      {
        id: 'home',
        name: 'Home',
        path: '/',
      },
      {
        id: 'browse',
        name: 'Browse',
        path: '/browse',
      },
    ],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Navigation>;

const Default: Story = {};

export { Default };
export default meta;
