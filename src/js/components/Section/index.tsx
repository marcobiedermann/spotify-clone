import React, { ReactNode } from 'react';
import { section } from './style.module.css';

export interface SectionProps {
  children: ReactNode;
}

function Section(props: SectionProps): JSX.Element {
  return <section className={section} {...props} />;
}

export default Section;
