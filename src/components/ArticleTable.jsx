import React from 'react';
import Articles from './Articles';
import Header from './Header';

const ArticleTable = (props) => {
  return (
    <table>
      <Header
        currentEnd={props.currentEnd}
        length={props.length}
        submittedLowToHigh={props.submittedLowToHigh}
        wordsLowToHigh={props.wordsLowToHigh} />
      <Articles data={props.data} sorting={props.sorting} />
    </table>
  )
}

export default ArticleTable;
