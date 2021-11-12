import React from 'react';
import renderer from 'react-test-renderer';
import Image from '.';
import imageFixtures from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer.create(<Image {...imageFixtures} />).toJSON();

  expect(tree).toMatchSnapshot();
});
