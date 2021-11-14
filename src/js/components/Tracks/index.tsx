import React from 'react';
import Track, { TrackProps } from '../Track';

export interface TracksProps {
  items?: TrackProps[];
}

function Tracks(props: TracksProps): JSX.Element {
  const { items = [] } = props;

  return (
    <table>
      <tbody>
        {items.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </tbody>
    </table>
  );
}

export default Tracks;
