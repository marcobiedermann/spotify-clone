import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { PlaylistsPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><PlaylistsPage /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
