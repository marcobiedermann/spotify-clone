import React from 'react';
import renderer from 'react-test-renderer';
import { NewReleasesPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<NewReleasesPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
