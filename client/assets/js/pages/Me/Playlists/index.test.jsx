import React from 'react';
import renderer from 'react-test-renderer';
import PlaylistsPage from '.';

it('renders correctly', () => {
  const tree = renderer.create(<PlaylistsPage />).toJSON();

  expect(tree).toMatchSnapshot();
});
