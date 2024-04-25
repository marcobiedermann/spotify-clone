import type { Meta, StoryObj } from '@storybook/react';
import Media, { MediaBody, MediaObject } from '.';

const meta: Meta<typeof Media> = {
  component: Media,
  render: () => (
    <Media>
      <MediaObject>Media Object</MediaObject>
      <MediaBody>Media Body</MediaBody>
    </Media>
  ),
};

type Story = StoryObj<typeof Media>;

const Default: Story = {};

const Left: Story = {
  render: () => (
    <Media>
      <MediaObject direction="left">Media Object</MediaObject>
      <MediaBody>Media Body</MediaBody>
    </Media>
  ),
};

const Right: Story = {
  render: () => (
    <Media>
      <MediaObject direction="right">Media Object</MediaObject>
      <MediaBody>Media Body</MediaBody>
    </Media>
  ),
};

export { Default, Left, Right };
export default meta;
