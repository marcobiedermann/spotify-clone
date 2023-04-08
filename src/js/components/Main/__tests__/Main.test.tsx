import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Main from '..';

it('renders correctly', () => {
  const { container } = render(<Main>Main</Main>);

  expect(container.firstChild).toMatchSnapshot();
});
