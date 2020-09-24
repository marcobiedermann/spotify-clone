import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchNewReleases } from '../../../actions/browse';
import Albums, { AlbumsProps } from '../../../components/Albums';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export interface NewReleasesPageProps extends RouteChildrenProps {
  accessToken: string;
  albums: AlbumsProps;
  error: {
    message: string;
  };
  fetchNewReleases: any;
  isLoading: boolean;
}

export class NewReleasesPage extends Component<NewReleasesPageProps> {
  componentDidMount() {
    const { accessToken, fetchNewReleases } = this.props;

    fetchNewReleases(accessToken);
  }

  render() {
    const { albums, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>New Releases</title>
        </Helmet>
        <Albums {...albums} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  albums: state.browse.albums,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchNewReleases,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewReleasesPage);
