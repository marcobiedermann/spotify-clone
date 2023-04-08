import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Albums from '..';

describe('Albums component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Albums />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
