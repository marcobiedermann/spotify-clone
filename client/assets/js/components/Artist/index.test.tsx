import React from 'react';
import renderer from 'react-test-renderer';
import Artist from '.';
import artistFixtures from './__fixtures__';

describe('Artist component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Artist {...artistFixtures} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
