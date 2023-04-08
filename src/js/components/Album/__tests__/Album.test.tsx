import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Album from '..';
import albumFixtures from '../__fixtures__/album';

describe('Album component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Album {...albumFixtures} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
