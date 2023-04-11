import type { Meta, StoryObj } from '@storybook/react';
import Content from '.';

const meta: Meta<typeof Content> = {
  component: Content,
  args: {
    children: 'Content',
  },
};

type Story = StoryObj<typeof Content>;

const Default: Story = {};

export { Default };
export default meta;
