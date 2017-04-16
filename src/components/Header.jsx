import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../state/actions';
import '../style/Header.css';

const Header = (props) => {
  const { wordsLowToHigh, submittedLowToHigh, setSort } = props;

  let wordsClass = "fa fa-sort";
  let submittedClass = "fa fa-sort";

  if (wordsLowToHigh === null) {
    wordsClass = "fa fa-sort";
  } else if (wordsLowToHigh === false) {
    wordsClass = "fa fa-caret-up"
  } else {
    wordsClass = "fa fa-caret-down"
  }

  if (submittedLowToHigh === null) {
    submittedClass = "fa fa-sort";
  } else if (submittedLowToHigh === false) {
    submittedClass = "fa fa-caret-up"
  } else {
    submittedClass = "fa fa-caret-down"
  }

  return (
    <thead>
      <tr>
        <th className="header-element article-title" colSpan="2">Unpublished Articles
          <span> ({`${props.currentEnd} of ${props.length}`})</span></th>
        <th className="header-element author">Author</th>
        <th className="header-element wordcount">Words
          <i onClick={() => {setSort('Words')}} className={wordsClass} aria-hidden="true"></i>
        </th>
        <th className="header-element submitted">Submitted
          <i onClick={() => {setSort('Submitted')}} className={submittedClass} aria-hidden="true"></i>
        </th>
      </tr>
    </thead>
  )
}

export default connect(null, { setSort })(Header);
