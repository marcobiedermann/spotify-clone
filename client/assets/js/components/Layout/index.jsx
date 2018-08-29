import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Me from '../Me';
import Navigation from '../Navigation';
import styles from './style.css';

class Layout extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchMe,
      fetchMePlaylists,
    } = this.props;

    fetchMe(accessToken);
    fetchMePlaylists(accessToken);
  }

  render() {
    const {
      children,
      me,
      playlists,
    } = this.props;

    return (
      <div className={styles.layout}>
        <Header>
          <Me {...me} />
        </Header>
        <Content>
          <Main>
            {children}
          </Main>
          <Aside>
            <Navigation />
            {playlists.items && (
              <ul>
                {playlists.items.map(playlist => (
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
        <Footer>
          Footer
        </Footer>
      </div>
    );
  }
}

Layout.propTypes = {
  accessToken: PropTypes.string,
  children: PropTypes.node,
  fetchMe: PropTypes.func,
  fetchMePlaylists: PropTypes.func,
  me: PropTypes.shape(),
  playlists: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
};

Layout.defaultProps = {
  accessToken: '',
  children: null,
  fetchMe: () => {},
  fetchMePlaylists: () => {},
  me: null,
  playlists: {
    items: [],
  },
};

export default Layout;
