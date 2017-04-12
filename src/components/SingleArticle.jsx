import React from 'react';
import Moment from 'moment';

const SingleArticle = (props) => {
  console.log(props.published.split(" "));
  return (
    <section>
      <img className="article-image" src={props.imageUrl}></img>
      <h3 className="article-title">{props.title}</h3>
      <div className="author">{props.authorName}</div>
      <div className="wordcount">{props.words}</div>
      <div className="submitted">{Moment(props.published).fromNow()}</div>
    </section>
  )
}

export default SingleArticle;
