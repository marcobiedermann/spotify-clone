import React from 'react';
import renderer from 'react-test-renderer';
import Image from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<Image />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
