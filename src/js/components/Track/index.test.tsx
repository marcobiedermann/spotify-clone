import { render } from '@testing-library/react';
import React from 'react';
import Track from '.';
import trackFixtures from './__fixtures__';

it('renders correctly', () => {
  const { container } = render(<Track {...trackFixtures} />);

  expect(container.firstChild).toMatchSnapshot();
});
