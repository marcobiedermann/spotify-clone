import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Category from '.';
import categoryFixtures from './__fixtures__';

const meta: Meta<typeof Category> = {
  component: Category,
  args: categoryFixtures,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Category>;

const Default: Story = {};

export { Default };
export default meta;
