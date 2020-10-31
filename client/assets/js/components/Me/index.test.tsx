import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Me from '.';
import meFixtures from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Me {...meFixtures} />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
