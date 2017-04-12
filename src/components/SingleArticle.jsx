import React from 'react';
import Moment from 'moment';

const SingleArticle = (props) => {
  return (
    <section className="article-info">
      <div className="article-title">
        <img src={props.imageUrl}></img>
        <h3>{props.title}</h3>
      </div>
      <div className="author">{props.authorName}</div>
      <div className="wordcount">{props.words}</div>
      <div className="submitted">{Moment(props.published).fromNow()}</div>
    </section>
  )
}

export default SingleArticle;
