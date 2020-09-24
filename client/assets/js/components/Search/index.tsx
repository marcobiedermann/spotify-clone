import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.css';

export interface SearchProps {
  className?: string;
  onSubmit: () => void;
}

const Search: FC<SearchProps> = (props) => {
  const { className, onSubmit } = props;

  return (
    <form className={classNames(className, styles.search)} onSubmit={onSubmit}>
      <input className={styles.search__input} type="search" />
    </form>
  );
};

export default Search;
