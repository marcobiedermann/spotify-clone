/* eslint-disable import/no-extraneous-dependencies */

import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import * as stories from '../Error.stories';

const { Default } = composeStories(stories);

it('renders correctly', () => {
  const { container } = render(<Default />);

  expect(container.firstChild).toMatchSnapshot();
});
