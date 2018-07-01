import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Track = ({
  duration_ms,
  name,
  track_number,
}) => (
  <tr>
    <td>
      {track_number}
    </td>
    <td>
      {name}
    </td>
    <td>
      {moment.utc(duration_ms).format('mm:ss')}
    </td>
  </tr>
);

Track.propTypes = {
  duration_ms: PropTypes.number,
  name: PropTypes.string,
  track_number: PropTypes.number,
};

Track.defaultProps = {
  duration_ms: 0,
  name: '',
  track_number: 0,
};

export default Track;
