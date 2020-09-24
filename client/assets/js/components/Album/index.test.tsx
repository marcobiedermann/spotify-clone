import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Album from '.';

describe('Album component', () => {
  const album = {
    artists: [
      {
        id: '123456',
      },
    ],
    id: '123456',
    images: [{}, {}],
    name: 'Album Name',
    tracks: {
      items: [],
    },
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Album {...album} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
