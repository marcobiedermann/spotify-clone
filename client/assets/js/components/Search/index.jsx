import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.css';

class Search extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: () => {},
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <form className={styles.search} onSubmit={onSubmit}>
        <input className={styles.search__input} type="search" />
      </form>
    );
  }
}

export default Search;
