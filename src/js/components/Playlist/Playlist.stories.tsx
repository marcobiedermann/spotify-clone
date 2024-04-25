import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Playlist from '.';
import playlistFixtures from './__fixtures__';

const meta: Meta<typeof Playlist> = {
  component: Playlist,
  args: playlistFixtures,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Playlist>;

const Default: Story = {};

export { Default };
export default meta;
