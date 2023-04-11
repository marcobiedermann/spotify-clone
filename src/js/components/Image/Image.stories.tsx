import type { Meta, StoryObj } from '@storybook/react';
import Image from '.';
import imageFixtures from './__fixtures__';

const meta: Meta<typeof Image> = {
  component: Image,
  args: imageFixtures,
};

type Story = StoryObj<typeof Image>;

const Default: Story = {};

export { Default };
export default meta;
