import React from 'react';
import renderer from 'react-test-renderer';
import Error from '.';

it('renders correctly', () => {
  const tree = renderer.create(<Error>Error</Error>).toJSON();

  expect(tree).toMatchSnapshot();
});
