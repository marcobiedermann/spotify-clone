import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../Media.stories';

const { Default, Left, Right } = composeStories(stories);

describe('Media Component', () => {
  it('should render MediaObject with default direction correctly', () => {
    expect.assertions(1);

    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render MediaObject with direction `left` correctly', () => {
    expect.assertions(1);

    const { container } = render(<Left />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render MediaObject with direction `right` correctly', () => {
    expect.assertions(1);

    const { container } = render(<Right />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
