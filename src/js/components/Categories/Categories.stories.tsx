import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Categories from '.';
import categoryFixtures from '../Category/__fixtures__';

const meta: Meta<typeof Categories> = {
  component: Categories,
  args: {
    items: [categoryFixtures],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Categories>;

const Default: Story = {};

export { Default };
export default meta;
