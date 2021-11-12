import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Category from '.';
import categoryFixture from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Category {...categoryFixture} />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
