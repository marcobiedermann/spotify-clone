const artist = {
  id: '',
  name: '',
};

const image = {
  height: 100,
  url: '',
  width: 100,
};

const item = {
  duration_ms: 100,
  id: '',
  name: '',
  track_number: 100,
};

const album = {
  artists: [artist],
  id: '',
  images: [image],
  name: '',
  tracks: {
    items: [item],
  },
};

export default album;
