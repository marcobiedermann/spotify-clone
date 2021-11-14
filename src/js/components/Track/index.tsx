import format from 'date-fns/format';
import React from 'react';

export interface TrackProps {
  duration_ms: number;
  id: string;
  name: string;
  track_number: number;
}

function Track(props: TrackProps): JSX.Element {
  const { duration_ms, name, track_number } = props;

  return (
    <tr>
      <td>{track_number}</td>
      <td>{name}</td>
      <td>{format(duration_ms, 'mm:ss')}</td>
    </tr>
  );
}

export default Track;
