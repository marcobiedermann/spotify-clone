import type { Meta, StoryObj } from '@storybook/react';
import Aside from '.';

const meta: Meta<typeof Aside> = {
  component: Aside,
  args: {
    children: 'Aside',
  },
};

type Story = StoryObj<typeof Aside>;

const Default: Story = {};

export { Default };
export default meta;
