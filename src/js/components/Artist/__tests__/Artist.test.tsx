import { render } from '@testing-library/react';
import React from 'react';
import Artist from '..';
import artistFixtures from '../__fixtures__';

describe('Artist component', () => {
  it('renders correctly', () => {
    const { container } = render(<Artist {...artistFixtures} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
