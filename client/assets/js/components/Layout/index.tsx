import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchMe, fetchMePlaylists } from '../../actions/me';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
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

export class Layout extends Component<any> {
  componentDidMount() {
    const { accessToken, fetchMe, fetchMePlaylists } = this.props;

    fetchMe(accessToken);
    fetchMePlaylists(accessToken);
  }

  render() {
    const { children, me, playlists } = this.props;

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
            {playlists.items && (
              <ul>
                {playlists.items.map((playlist) => (
                  <li key={playlist.id}>
                    <Link to={`/users/${playlist.owner.id}/playlists/${playlist.id}`}>
                      {playlist.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Aside>
        </Content>
        <Footer>Footer</Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  me: state.me.me,
  playlists: state.me.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMe,
      fetchMePlaylists,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
