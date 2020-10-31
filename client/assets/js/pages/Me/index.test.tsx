import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MePage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Route render={(props) => <MePage {...props} />} />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
