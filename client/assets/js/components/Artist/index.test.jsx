import React from 'react';
import renderer from 'react-test-renderer';
import Artist from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<Artist />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
