import React, { FC } from 'react';
import Track, { TrackProps } from '../Track';

export interface TracksProps {
  items: TrackProps[];
}

const Tracks: FC<TracksProps> = (props) => {
  const { items } = props;

  return (
    <table>
      <tbody>
        {items.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </tbody>
    </table>
  );
};

export default Tracks;
