import React from 'react';
import renderer from 'react-test-renderer';
import Artist from '.';

describe('Artist component', () => {
  const artist = {
    images: [{}],
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Artist {...artist} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
