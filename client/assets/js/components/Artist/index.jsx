import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Image from '../Image';

class Artist extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        height: PropTypes.number,
        url: PropTypes.string,
        width: PropTypes.number,
      }),
    ),
    name: PropTypes.string,
  };

  static defaultProps = {
    images: [],
    name: '',
  };

  render() {
    const { images, name } = this.props;

    return (
      <figure>
        {images[0] && <Image {...images[0]} alt={name} />}
        <figcaption>
          <h2>{name}</h2>
        </figcaption>
      </figure>
    );
  }
}

export default Artist;
