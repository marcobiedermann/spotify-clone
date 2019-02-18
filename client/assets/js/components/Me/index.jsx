import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import Image from '../Image';

class Me extends PureComponent {
  static propTypes = {
    display_name: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    display_name: '',
    id: '',
    images: [],
  };

  render() {
    const { display_name, id, images } = this.props;

    return (
      <div className={styles.me}>
        <figure className={styles.me__image}>
          {images[0] && <Image url={images[0].url} alt={display_name} width={32} height={32} />}
        </figure>
        <Link to={`/users/${id}`}>{display_name}</Link>
      </div>
    );
  }
}

export default Me;
