import React from 'react';
import renderer from 'react-test-renderer';
import Search from '.';
import searchFixtures from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer.create(<Search {...searchFixtures} />).toJSON();

  expect(tree).toMatchSnapshot();
});
