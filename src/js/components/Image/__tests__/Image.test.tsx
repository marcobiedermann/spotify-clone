import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Image from '..';
import imageFixtures from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(<Image {...imageFixtures} />);

  expect(container.firstChild).toMatchSnapshot();
});
