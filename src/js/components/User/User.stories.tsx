import type { Meta, StoryObj } from '@storybook/react';
import User from '.';
import userFixtures from './__fixtures__';

const meta: Meta<typeof User> = {
  component: User,
  args: userFixtures,
};

type Story = StoryObj<typeof User>;

const Default: Story = {};

export { Default };
export default meta;
