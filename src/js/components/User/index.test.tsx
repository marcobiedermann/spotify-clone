import React from 'react';
import renderer from 'react-test-renderer';
import User from '.';
import userFixtures from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer.create(<User {...userFixtures} />).toJSON();

  expect(tree).toMatchSnapshot();
});
