import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Albums from '.';

describe('Albums component', () => {
  const albums = [
    {
      id: '123456',
    },
  ];

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter><Albums albums={albums} /></MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
