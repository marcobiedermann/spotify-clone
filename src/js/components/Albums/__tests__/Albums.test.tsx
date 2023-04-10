import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Albums from '..';

describe('Albums component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Albums items={[]} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
