import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import AlbumTrack from '..';
import albumTrackFixtures from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <AlbumTrack {...albumTrackFixtures} />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
