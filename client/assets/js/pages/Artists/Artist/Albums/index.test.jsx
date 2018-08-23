import React from 'react';
import renderer from 'react-test-renderer';
import AlbumsPage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<AlbumsPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
