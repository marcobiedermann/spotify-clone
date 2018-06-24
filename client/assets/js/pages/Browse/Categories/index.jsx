import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import CategoryPage from './Category';
import { fetchCategories } from '../../../actions/browse';
import Categories from '../../../components/Categories';

class CategoriesPage extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;

    fetchCategories(
      'BQB1tia0pKzLBFfI97THyRAQVACkn869_YwunNv18AlClEcAtNYZ9mHug8zGuOC-HquvGRwM6pBmszxEIqLVozpxkM-lqnDRN53aXJ-meePIDt6Qcj43PKpSNY9cRVjWU2rm0o7nWL72nipBwwXJ3L9DQ_wKziHDV1CmniDjXSJHWo7XI-209dmUG8ONh867TJUfFmKELtGAVI8FPfYzqtwdZC7cN_n29A_nRIz4MEcNELzyLwcILC4i9mot4qhcfHKPkFUxG0BrWw',
    );
  }

  render() {
    const { categories, match } = this.props;
    return (
      <div>
        <Categories categories={categories.items} />
        <Route path={`${match.url}/:category_id`} component={CategoryPage} />
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  categories: PropTypes.shape(),
  fetchCategories: PropTypes.func,
  match: PropTypes.shape(),
};

CategoriesPage.defaultProps = {
  categories: {},
  fetchCategories: () => {},
  match: null,
};

const mapStateToProps = state => ({
  categories: state.browse.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategories,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesPage);
