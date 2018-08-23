import React from 'react';
import renderer from 'react-test-renderer';
import PlaylistPage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<PlaylistPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
