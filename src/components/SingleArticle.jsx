import React from 'react';

const SingleArticle = (props) => {
  return (
    <section>
      <img className="article-image" src={props.imageUrl}></img>
      <h3 className="article-title">{props.title}</h3>
      <div className="author">{props.authorName}</div>
      <div className="wordcount">{props.words}</div>
      <div className="submitted">{props.published}</div>
    </section>
  )
}

export default SingleArticle;
