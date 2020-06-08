import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Me from '../Me';
import Navigation from '../Navigation';
import Search from '../Search';
import styles from './style.css';
import { fetchMe, fetchMePlaylists } from '../../actions/me';

export class Layout extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    children: PropTypes.node,
    fetchMe: PropTypes.func,
    fetchMePlaylists: PropTypes.func,
    me: PropTypes.shape(),
    playlists: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
        }),
      ),
    }),
  };

  static defaultProps = {
    accessToken: '',
    children: null,
    fetchMe: () => {},
    fetchMePlaylists: () => {},
    me: null,
    playlists: {
      items: [],
    },
  };

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
          <Search />
          <Me {...me} />
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
