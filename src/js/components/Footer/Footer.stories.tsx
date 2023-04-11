import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta: Meta<typeof Footer> = {
  component: Footer,
  args: {
    children: 'Footer',
  },
};

type Story = StoryObj<typeof Footer>;

const Default: Story = {};

export { Default };
export default meta;
