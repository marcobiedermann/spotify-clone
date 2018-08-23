import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CategoryPage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><CategoryPage /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
