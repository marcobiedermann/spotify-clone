import AlbumTrack, { AlbumTrackProps } from '../AlbumTrack';

export interface AlbumTracksProps {
  items: AlbumTrackProps[];
}

function AlbumTracks(props: AlbumTracksProps): JSX.Element {
  const { items } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th align="right">Duration</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <AlbumTrack key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

export default AlbumTracks;
