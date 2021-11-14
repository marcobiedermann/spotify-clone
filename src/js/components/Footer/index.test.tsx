import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

it('renders correctly', () => {
  const tree = renderer.create(<Footer>Footer</Footer>).toJSON();

  expect(tree).toMatchSnapshot();
});
