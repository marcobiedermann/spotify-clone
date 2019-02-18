import React from 'react';
import renderer from 'react-test-renderer';
import User from '.';

it('renders correctly', () => {
  const tree = renderer.create(<User />).toJSON();

  expect(tree).toMatchSnapshot();
});
