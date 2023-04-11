import { AlbumProps } from '..';
import imageFixtures from '../../Image/__fixtures__';
import artistFixtures from '../../Artist/__fixtures__';

const album: AlbumProps = {
  id: '2up3OPMp9Tb4dAKM2erWXQ',
  images: [imageFixtures],
  name: 'string',
  artists: [artistFixtures],
  tracks: {
    items: [
      {
        artists: [artistFixtures],
        duration_ms: 0,
        id: 'string',
        name: 'string',
        track_number: 0,
      },
    ],
  },
};

export default album;
