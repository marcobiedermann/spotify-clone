import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const Me = ({
  display_name,
  id,
  images,
}) => (
  <div className={styles.me}>
    <figure className={styles.me__image}>
      {images[0] && (
        <img src={images[0].url} alt={display_name} width="32" height="32" />
      )}
    </figure>
    <Link to={`/users/${id}`}>
      {display_name}
    </Link>
  </div>
);

Me.propTypes = {
  display_name: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape()),
};

Me.defaultProps = {
  display_name: '',
  id: '',
  images: [],
};

export default Me;
