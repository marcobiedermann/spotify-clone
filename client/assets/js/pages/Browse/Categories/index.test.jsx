import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CategoriesPage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><CategoriesPage /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
