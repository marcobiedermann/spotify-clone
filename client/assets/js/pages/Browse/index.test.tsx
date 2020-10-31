import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import BrowsePage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Route render={(props) => <BrowsePage {...props} />} />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
