import React from 'react';
import renderer from 'react-test-renderer';
import { RelatedArtistsPage } from '.';

it('renders correctly', () => {
  const tree = renderer.create(<RelatedArtistsPage />).toJSON();

  expect(tree).toMatchSnapshot();
});
