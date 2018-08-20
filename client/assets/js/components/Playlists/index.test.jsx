import React from 'react';
import renderer from 'react-test-renderer';
import Playlists from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<Playlists />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
