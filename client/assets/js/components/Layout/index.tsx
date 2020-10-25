import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import Aside from '../Aside';
import Content from '../Content';
import Error from '../Error';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';
import Main from '../Main';
import { MeProps } from '../Me';
import Navigation from '../Navigation';
import { PlaylistsProps } from '../Playlists';
import Search from '../Search';
import styles from './style.css';

export interface LayoutProps {
  accessToken: string;
  fetchMe: any;
  fetchMePlaylists: any;
  me: MeProps;
  playlists: PlaylistsProps;
}

const Layout: FC = (props) => {
  const { children } = props;
  const { data, error } = useSWR('/v1/me/playlists');

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
                <Link to={`/users/${item.owner.id}/playlists/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Aside>
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Layout;
