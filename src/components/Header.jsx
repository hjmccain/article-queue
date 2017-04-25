import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../state/actions';
import '../style/responsive.css';
import '../style/Header.css';
import '../style/SingleArticle.css';

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
    <div className="header">
      <div className="article-info">
        <div className="header-element article-title" colSpan="2">Unpublished Articles
          <span> ({`${props.currentEnd} of ${props.length}`})</span></div>
        <div className="header-element author">Author</div>
        <div className="header-element wordcount">Words
          <i onClick={() => {setSort('Words')}} className={classDefiner(wordsLowToHigh)} aria-hidden="true"></i>
        </div>
        <div className="header-element submitted">Submitted
          <i onClick={() => {setSort('Submitted')}} className={classDefiner(submittedLowToHigh)} aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { setSort })(Header);
