import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Album from '.';
import albumFixtures from './__fixtures__';

describe('Album component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Album {...albumFixtures} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
