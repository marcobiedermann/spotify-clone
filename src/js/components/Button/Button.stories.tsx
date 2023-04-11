import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
    type: 'button',
  },
};

type Story = StoryObj<typeof Button>;

const Default: Story = {};

export { Default };
export default meta;
