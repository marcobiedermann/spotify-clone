import React from 'react';
import renderer from 'react-test-renderer';
import Albums from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<Albums />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
