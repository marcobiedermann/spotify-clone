import React from 'react';
import renderer from 'react-test-renderer';
import { TopTracksPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<TopTracksPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
