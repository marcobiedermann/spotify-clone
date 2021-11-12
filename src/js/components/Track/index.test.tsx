import React from 'react';
import renderer from 'react-test-renderer';
import Track from '.';
import trackFixtures from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer.create(<Track {...trackFixtures} />).toJSON();

  expect(tree).toMatchSnapshot();
});
