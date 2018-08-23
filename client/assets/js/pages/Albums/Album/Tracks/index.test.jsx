import React from 'react';
import renderer from 'react-test-renderer';
import TracksPage from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<TracksPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
