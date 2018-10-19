import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Track extends PureComponent {
  static propTypes = {
    duration_ms: PropTypes.number,
    name: PropTypes.string,
    track_number: PropTypes.number,
  };

  static defaultProps = {
    duration_ms: 0,
    name: '',
    track_number: 0,
  };

  render() {
    const { duration_ms, name, track_number } = this.props;

    return (
      <tr>
        <td>{track_number}</td>
        <td>{name}</td>
        <td>{format(duration_ms, 'mm:ss')}</td>
      </tr>
    );
  }
}

export default Track;
