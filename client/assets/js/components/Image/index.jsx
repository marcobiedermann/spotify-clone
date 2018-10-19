import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Image extends PureComponent {
  static propTypes = {
    alt: PropTypes.string,
    height: PropTypes.number,
    url: PropTypes.string,
    width: PropTypes.number,
  };

  static defaultProps = {
    alt: '',
    height: 0,
    url: '',
    width: 0,
  };

  render() {
    const {
      alt, height, url, width,
    } = this.props;

    return <img alt={alt} height={height} src={url} width={width} />;
  }
}

export default Image;
