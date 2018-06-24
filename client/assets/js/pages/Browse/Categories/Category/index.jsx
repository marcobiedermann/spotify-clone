import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PlaylistsPage from './Playlists';
import { fetchCategory } from '../../../../actions/browse';
import Category from '../../../../components/Category';

class CategoryPage extends Component {
  componentDidMount() {
    const { fetchCategory } = this.props;

    fetchCategory(
      'BQB1tia0pKzLBFfI97THyRAQVACkn869_YwunNv18AlClEcAtNYZ9mHug8zGuOC-HquvGRwM6pBmszxEIqLVozpxkM-lqnDRN53aXJ-meePIDt6Qcj43PKpSNY9cRVjWU2rm0o7nWL72nipBwwXJ3L9DQ_wKziHDV1CmniDjXSJHWo7XI-209dmUG8ONh867TJUfFmKELtGAVI8FPfYzqtwdZC7cN_n29A_nRIz4MEcNELzyLwcILC4i9mot4qhcfHKPkFUxG0BrWw',
      'dinner',
    );
  }

  render() {
    const { category, match } = this.props;

    return (
      <div>
        <Category {...category} />
        <Route path={`${match.url}/playlists`} exact component={PlaylistsPage} />
      </div>
    );
  }
}

CategoryPage.propTypes = {
  category: PropTypes.shape(),
  fetchCategory: PropTypes.func,
  match: PropTypes.shape(),
};

CategoryPage.defaultProps = {
  category: {},
  fetchCategory: () => {},
  match: null,
};

const mapStateToProps = state => ({
  category: state.browse.category,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategory,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage);
