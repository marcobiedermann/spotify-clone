import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  component: Header,
  args: {
    children: 'Header',
  },
};

type Story = StoryObj<typeof Header>;

const Default: Story = {};

export { Default };
export default meta;
