import React from 'react';
import renderer from 'react-test-renderer';
import Artists from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<Artists />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
