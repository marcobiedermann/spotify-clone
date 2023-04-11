import type { Meta, StoryObj } from '@storybook/react';
import Artists from '.';
import artistFixtures from '../Artist/__fixtures__';

const meta: Meta<typeof Artists> = {
  component: Artists,
  args: {
    artists: [artistFixtures],
  },
};

type Story = StoryObj<typeof Artists>;

const Default: Story = {};

export { Default };
export default meta;
