import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { UserPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><UserPage /></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
