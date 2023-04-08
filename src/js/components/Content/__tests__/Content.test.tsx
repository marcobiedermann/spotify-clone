import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Content from '..';

it('renders correctly', () => {
  const { container } = render(<Content>Content</Content>);

  expect(container.firstChild).toMatchSnapshot();
});
