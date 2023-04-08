import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Button from '..';

it('renders correctly', () => {
  const { container } = render(<Button>Button</Button>);

  expect(container.firstChild).toMatchSnapshot();
});
