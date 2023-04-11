import type { Meta, StoryObj } from '@storybook/react';
import Player from '.';

const meta: Meta<typeof Player> = {
  component: Player,
};

type Story = StoryObj<typeof Player>;

const Default: Story = {};

export { Default };
export default meta;
