import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Playlists from '.';
import playlistFixtures from '../Playlist/__fixtures__';

const meta: Meta<typeof Playlists> = {
  component: Playlists,
  args: {
    items: [playlistFixtures],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Playlists>;

const Default: Story = {};

export { Default };
export default meta;
