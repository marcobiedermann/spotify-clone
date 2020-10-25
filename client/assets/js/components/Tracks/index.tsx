import React, { FC } from 'react';
import Track, { TrackProps } from '../Track';

export interface TracksProps {
  tracks: TrackProps[];
}

const Tracks: FC<TracksProps> = (props) => {
  const { tracks } = props;

  return (
    <table>
      <tbody>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </tbody>
    </table>
  );
};

export default Tracks;
