import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import * as stories from '../AlbumTrack.stories';

const { Default } = composeStories(stories);

it('renders correctly', () => {
  const { container } = render(<Default />);

  expect(container.firstChild).toMatchSnapshot();
});
