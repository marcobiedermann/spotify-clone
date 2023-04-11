import type { Meta, StoryObj } from '@storybook/react';
import Search from '.';

const meta: Meta<typeof Search> = {
  component: Search,
  args: {
    onSubmit: () => console.log('Searching …'),
  },
};

type Story = StoryObj<typeof Search>;

const Default: Story = {};

export { Default };
export default meta;
