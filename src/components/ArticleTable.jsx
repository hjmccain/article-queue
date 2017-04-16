import React from 'react';
import Articles from './Articles';
import Header from './Header';

const ArticleTable = (props) => {
  return (
    <table>
      <Header
        submittedLowToHigh={props.submittedLowToHigh}
        wordsLowToHigh={props.wordsLowToHigh} />
      <Articles data={props.data} />
    </table>
  )
}

export default ArticleTable;
