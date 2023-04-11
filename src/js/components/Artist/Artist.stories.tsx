import type { Meta, StoryObj } from '@storybook/react';
import Artist from '.';
import artistFixtures from './__fixtures__';

const meta: Meta<typeof Artist> = {
  component: Artist,
  args: artistFixtures,
};

type Story = StoryObj<typeof Artist>;

const Default: Story = {};

export { Default };
export default meta;
