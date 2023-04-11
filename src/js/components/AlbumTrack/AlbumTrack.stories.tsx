import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AlbumTrack from '.';
import albumTrackFixtures from './__fixtures__';

const meta: Meta<typeof AlbumTrack> = {
  component: AlbumTrack,
  args: albumTrackFixtures,
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

type Story = StoryObj<typeof AlbumTrack>;

const Default: Story = {};

export { Default };
export default meta;
