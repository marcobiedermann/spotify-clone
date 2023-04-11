import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PlaylistTracks from '.';
import playlistTrackFixtures from '../PlaylistTrack/__fixtures__';

const meta: Meta<typeof PlaylistTracks> = {
  component: PlaylistTracks,
  args: {
    items: [playlistTrackFixtures],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof PlaylistTracks>;

const Default: Story = {};

export { Default };
export default meta;
