import { ReactNode } from 'react';

export interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer {...props} />;
}

export default Footer;
