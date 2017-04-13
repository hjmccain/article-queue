import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import '../style/Header.css';

const Header = () => {
  return (
    <thead>
      <tr>
        <th className="header-element article-title" colSpan="2">Unpublished Articles ({66})</th>
        <th className="header-element author">Author</th>
        <th className="header-element wordcount">Words<i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th className="header-element submitted">Submitted <i className="fa fa-caret-down" aria-hidden="true"></i></th>
      </tr>
    </thead>
  )
}

const mapStateToProps = (state) => ({
  sortedBy: state.sortedBy
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSort: () => {dispatch(actions.setSort()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
