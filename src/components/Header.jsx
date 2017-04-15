import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import '../style/Header.css';

const Header = (props) => {
  return (
    <thead>
      <tr>
        <th className="header-element article-title" colSpan="2">Unpublished Articles ({66})</th>
        <th className="header-element author">Author</th>
        <th className="header-element wordcount">Words
          <i onClick={() => {props.setSort('Words')}} className="fa fa-caret-down" aria-hidden="true"></i>
        </th>
        <th className="header-element submitted">Submitted
          <i onClick={() => {props.setSort('Submitted')}} className="fa fa-caret-down" aria-hidden="true"></i>
        </th>
      </tr>
    </thead>
  )
}

const mapStateToProps = (state) => ({
  sortedByCategory: state.sortedByCategory,
  wordsLowToHigh: state.wordsLowToHigh,
  submittedLowToHigh: state.submittedLowToHigh
});

const mapDispatchToProps = (dispatch) => ({
  setSort: (category) => {dispatch(actions.setSort(category)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
