import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Album from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><Album /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
