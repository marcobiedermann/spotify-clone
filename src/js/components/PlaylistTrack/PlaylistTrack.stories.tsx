import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PlaylistTrack from '.';
import playlistTrackFixtures from './__fixtures__';

const meta: Meta<typeof PlaylistTrack> = {
  component: PlaylistTrack,
  args: playlistTrackFixtures,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <table>
          <tbody>
            <Story />
          </tbody>
        </table>
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof PlaylistTrack>;

const Default: Story = {};

export { Default };
export default meta;
