import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface SearchProps {
  className?: string;
  onSubmit: () => void;
}

function Search(props: SearchProps): JSX.Element {
  const { className, onSubmit } = props;

  return (
    <form className={classNames(className, styles.search)} onSubmit={onSubmit}>
      <input className={styles.search__input} type="search" />
    </form>
  );
}

export default Search;
