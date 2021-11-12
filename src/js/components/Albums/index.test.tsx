import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Albums from '.';

describe('Albums component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Albums />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
