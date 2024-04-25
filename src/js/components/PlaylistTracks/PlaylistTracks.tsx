import PlaylistTrack, { PlaylistTrackProps } from '../PlaylistTrack';

export interface PlaylistTracksProps {
  items: PlaylistTrackProps[];
}

function PlaylistTracks(props: PlaylistTracksProps): JSX.Element {
  const { items = [] } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Album</th>
          <th>Added</th>
          <th align="right">Duration</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <PlaylistTrack key={item.track?.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

export default PlaylistTracks;
