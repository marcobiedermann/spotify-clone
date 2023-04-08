import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Aside from '..';

it('renders correctly', () => {
  const { container } = render(<Aside>Aside</Aside>);

  expect(container.firstChild).toMatchSnapshot();
});
