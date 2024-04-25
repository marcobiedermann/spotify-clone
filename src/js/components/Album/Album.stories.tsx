import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Album from '.';
import albumFixtures from './__fixtures__';

const meta: Meta<typeof Album> = {
  component: Album,
  args: albumFixtures,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Album>;

const Default: Story = {};

export { Default };
export default meta;
