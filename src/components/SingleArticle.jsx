import React from 'react';
import moment from 'moment';
import '../style/SingleArticle.css';
import '../style/responsive.css';

const SingleArticle = (props) => {
  return (
    <div className={props.articleClassName}>
      <div className="article-element image">
        <div className="crop-img">
          <img src={props.imageUrl} alt=""></img>
        </div>
      </div>
      <div className="article-element article-title">
        <h3>{props.title}</h3>
      </div>
      <div className="article-element author"><p>{props.authorName}</p></div>
      <div className="article-element wordcount"><p>{props.words}</p></div>
      <div className="article-element submitted"><p>{moment(props.published, "YYYY-M-DD h:mm:ss").fromNow()}</p></div>
    </div>
  )
}

export default SingleArticle;
