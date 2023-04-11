/* eslint-disable import/no-extraneous-dependencies */

import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../Album.stories';

const { Default } = composeStories(stories);

describe('Album component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
