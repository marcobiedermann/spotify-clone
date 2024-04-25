import clsx from 'clsx';
import styles from './Search.module.css';

export interface SearchProps {
  className?: string;
  onSubmit: () => void;
}

function Search(props: SearchProps): JSX.Element {
  const { className, onSubmit } = props;

  return (
    <form className={clsx(className, styles.search)} onSubmit={onSubmit}>
      <input className={styles.search__input} type="search" />
    </form>
  );
}

export default Search;
