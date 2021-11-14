import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import Aside from '../Aside';
import Content from '../Content';
import Error from '../Error';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';
import Main from '../Main';
import Navigation from '../Navigation';
import Search from '../Search';
import styles from './style.module.css';

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}
interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface PlaylistsData {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const { data, error } = useSWR<PlaylistsData>('/v1/me/playlists');

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { items } = data;

  return (
    <div className={styles.layout}>
      <Header>
        <Search onSubmit={() => console.log('Search')} />
        {/* <Me {...me} /> */}
      </Header>
      <Content>
        <Main>{children}</Main>
        <Aside>
          <Navigation />
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Link to={`/playlists/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Aside>
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
}

export default Layout;
