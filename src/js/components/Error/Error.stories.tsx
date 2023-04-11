import type { Meta, StoryObj } from '@storybook/react';
import Error from '.';

const meta: Meta<typeof Error> = {
  component: Error,
  args: {
    children: 'Error',
  },
};

type Story = StoryObj<typeof Error>;

const Default: Story = {};

export { Default };
export default meta;
