import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../state/actions';
import '../style/Header.css';

const Header = (props) => {
  const { wordsLowToHigh, submittedLowToHigh, setSort } = props;

  const classDefiner = (state) => {
    let className;
    if (state === null) {
      className = "fa fa-sort";
    } else if (state === false) {
      className = "fa fa-caret-up"
    } else {
      className = "fa fa-caret-down"
    }
    return className;
  }

  return (
    <thead>
      <tr>
        <th className="header-element article-title" colSpan="2">Unpublished Articles
          <span> ({`${props.currentEnd} of ${props.length}`})</span></th>
        <th className="header-element author">Author</th>
        <th className="header-element wordcount">Words
          <i onClick={() => {setSort('Words')}} className={classDefiner(wordsLowToHigh)} aria-hidden="true"></i>
        </th>
        <th className="header-element submitted">Submitted
          <i onClick={() => {setSort('Submitted')}} className={classDefiner(submittedLowToHigh)} aria-hidden="true"></i>
        </th>
      </tr>
    </thead>
  )
}

export default connect(null, { setSort })(Header);
