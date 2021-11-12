import React from 'react';
import renderer from 'react-test-renderer';
import Aside from '.';

it('renders correctly', () => {
  const tree = renderer.create(<Aside />).toJSON();

  expect(tree).toMatchSnapshot();
});
