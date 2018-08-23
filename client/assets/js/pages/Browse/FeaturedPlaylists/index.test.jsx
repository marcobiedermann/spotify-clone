import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FeaturedPlaylistsPage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><FeaturedPlaylistsPage /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
