import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section(props: SectionProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <section className={clsx(className, styles.section)} {...otherProps} />;
}

export type { SectionProps };

export default Section;
