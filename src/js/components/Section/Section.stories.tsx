import type { Meta, StoryObj } from '@storybook/react';
import Section from '.';

const meta: Meta<typeof Section> = {
  component: Section,
  args: {
    children: 'Section',
  },
};

type Story = StoryObj<typeof Section>;

const Default: Story = {};

export { Default };
export default meta;
