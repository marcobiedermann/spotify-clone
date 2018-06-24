import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import CategoryPage from './Category';
import { fetchCategories } from '../../../actions/browse';

class CategoriesPage extends Component {
  componentDidMount() {
    this.props.fetchCategories('BQB1tia0pKzLBFfI97THyRAQVACkn869_YwunNv18AlClEcAtNYZ9mHug8zGuOC-HquvGRwM6pBmszxEIqLVozpxkM-lqnDRN53aXJ-meePIDt6Qcj43PKpSNY9cRVjWU2rm0o7nWL72nipBwwXJ3L9DQ_wKziHDV1CmniDjXSJHWo7XI-209dmUG8ONh867TJUfFmKELtGAVI8FPfYzqtwdZC7cN_n29A_nRIz4MEcNELzyLwcILC4i9mot4qhcfHKPkFUxG0BrWw');
  }

  render() {
    return (
      <div>
        Categories
        <Route path={`${this.props.match.url}/:category_id`} component={CategoryPage} />
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  match: PropTypes.shape(),
  fetchCategories: PropTypes.func,
};

CategoriesPage.defaultProps = {
  match: null,
  fetchCategories: () => {},
};

const mapStateToProps = state => ({
  categories: state.browse.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCategories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
