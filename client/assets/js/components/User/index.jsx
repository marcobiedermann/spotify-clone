import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class User extends PureComponent {
  static propTypes = {
    display_name: PropTypes.string,
    followers: PropTypes.shape({
      total: PropTypes.number,
    }),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    display_name: '',
    followers: {
      total: 0,
    },
    images: [],
  };

  render() {
    const { display_name, followers, images } = this.props;

    return (
      <div>
        <h1>{display_name}</h1>
        {images[0] && (
          <figure>
            <img src={images[0].url} alt={display_name} />
          </figure>
        )}
        {followers && <p>{followers.total} Followers</p>}
      </div>
    );
  }
}

export default User;
