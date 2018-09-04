import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ArtistPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><ArtistPage /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
