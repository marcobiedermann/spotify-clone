import React from 'react';
import renderer from 'react-test-renderer';
import Tracks from '.';

it('renders correctly', () => {
  const tree = renderer.create(<Tracks />).toJSON();

  expect(tree).toMatchSnapshot();
});
