import React from 'react';
import renderer from 'react-test-renderer';
import Media, { MediaBody, MediaObject } from '.';

describe('Media Component', () => {
  it('should render MediaObject with default direction correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(
        <Media>
          <MediaObject>Media Object</MediaObject>
          <MediaBody>Media Body</MediaBody>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
      <div
        className="media"
      >
        <div
          className="media__object media__object--left"
        >
          Media Object
        </div>
        <div
          className="media__body"
        >
          Media Body
        </div>
      </div>
    `);
  });

  it('should render MediaObject with direction `left` correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(
        <Media>
          <MediaObject direction="left">Media Object</MediaObject>
          <MediaBody>Media Body</MediaBody>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
      <div
        className="media"
      >
        <div
          className="media__object media__object--left"
        >
          Media Object
        </div>
        <div
          className="media__body"
        >
          Media Body
        </div>
      </div>
    `);
  });

  it('should render MediaObject with direction `right` correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(
        <Media>
          <MediaObject direction="right">Media Object</MediaObject>
          <MediaBody>Media Body</MediaBody>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
      <div
        className="media"
      >
        <div
          className="media__object media__object--right"
        >
          Media Object
        </div>
        <div
          className="media__body"
        >
          Media Body
        </div>
      </div>
    `);
  });
});
