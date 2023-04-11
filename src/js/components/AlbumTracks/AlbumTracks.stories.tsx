import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AlbumTracks from '.';
import albumTrackFixtures from '../AlbumTrack/__fixtures__';

const meta: Meta<typeof AlbumTracks> = {
  component: AlbumTracks,
  args: {
    items: [albumTrackFixtures],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof AlbumTracks>;

const Default: Story = {};

export { Default };
export default meta;
