import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Album from '.';
import albumFixtures from './__fixtures__';

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
