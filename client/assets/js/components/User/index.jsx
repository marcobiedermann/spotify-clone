import PropTypes from 'prop-types';
import React from 'react';

const User = ({
  display_name,
  followers,
  images,
}) => (
  <div>
    <h1>
      {display_name}
    </h1>
    {images[0] && (
      <figure>
        <img src={images[0].url} alt={display_name} />
      </figure>
    )}
    {followers && (
      <p>
        {followers.total}
        {' '}
        Followers
      </p>
    )}
  </div>
);

User.propTypes = {
  display_name: PropTypes.string,
  followers: PropTypes.shape({
    total: PropTypes.number,
  }),
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
  })),
};

User.defaultProps = {
  display_name: '',
  followers: {
    total: 0,
  },
  images: [],
};

export default User;
