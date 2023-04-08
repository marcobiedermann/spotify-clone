import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Media, { MediaBody, MediaObject } from '..';

describe('Media Component', () => {
  it('should render MediaObject with default direction correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <Media>
        <MediaObject>Media Object</MediaObject>
        <MediaBody>Media Body</MediaBody>
      </Media>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="media"
      >
        <div
          class="media__object media__object--left"
        >
          Media Object
        </div>
        <div
          class="media__body"
        >
          Media Body
        </div>
      </div>
    `);
  });

  it('should render MediaObject with direction `left` correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <Media>
        <MediaObject direction="left">Media Object</MediaObject>
        <MediaBody>Media Body</MediaBody>
      </Media>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="media"
      >
        <div
          class="media__object media__object--left"
        >
          Media Object
        </div>
        <div
          class="media__body"
        >
          Media Body
        </div>
      </div>
    `);
  });

  it('should render MediaObject with direction `right` correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <Media>
        <MediaObject direction="right">Media Object</MediaObject>
        <MediaBody>Media Body</MediaBody>
      </Media>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="media"
      >
        <div
          class="media__object media__object--right"
        >
          Media Object
        </div>
        <div
          class="media__body"
        >
          Media Body
        </div>
      </div>
    `);
  });
});
