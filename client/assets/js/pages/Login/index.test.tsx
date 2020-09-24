import React from 'react';
import renderer from 'react-test-renderer';
import LoginPage from '.';

it('renders correctly', () => {
  const tree = renderer.create(<LoginPage />).toJSON();

  expect(tree).toMatchSnapshot();
});
