import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import '../style/Header.css';

const Header = (props) => {
  console.log(props);

  let wordsClass = "fa fa-sort";
  let submittedClass = "fa fa-sort";

  if (props.wordsLowToHigh === null) {
    wordsClass = "fa fa-sort";
  } else if (props.wordsLowToHigh === false) {
    wordsClass = "fa fa-caret-up"
  } else {
    wordsClass = "fa fa-caret-down"
  }

  if (props.submittedLowToHigh === null) {
    submittedClass = "fa fa-sort";
  } else if (props.submittedLowToHigh === false) {
    submittedClass = "fa fa-caret-up"
  } else {
    submittedClass = "fa fa-caret-down"
  }

  return (
    <thead>
      <tr>
        <th className="header-element article-title" colSpan="2">Unpublished Articles ({66})</th>
        <th className="header-element author">Author</th>
        <th className="header-element wordcount">Words
          <i onClick={() => {props.setSort('Words')}} className={wordsClass} aria-hidden="true"></i>
        </th>
        <th className="header-element submitted">Submitted
          <i onClick={() => {props.setSort('Submitted')}} className={submittedClass} aria-hidden="true"></i>
        </th>
      </tr>
    </thead>
  )
}

const mapStateToProps = (state) => ({
  wordsLowToHigh: state.wordsLowToHigh,
  submittedLowToHigh: state.submittedLowToHigh,
});

const mapDispatchToProps = (dispatch) => ({
  setSort: (category) => {dispatch(actions.setSort(category)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
