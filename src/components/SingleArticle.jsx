import React from 'react';
import Moment from 'moment';
import '../style/SingleArticle.css';

const SingleArticle = (props) => {
  return (
    <tr className="article-info">
      <td className="article-element article-title">
        <img src={props.imageUrl} alt=""></img>
        <h3>{props.title}</h3>
      </td>
      <td className="article-element author">{props.authorName}</td>
      <td className="article-element wordcount">{props.words}</td>
      <td className="article-element submitted">{Moment(props.published).fromNow()}</td>
    </tr>
  )
}

export default SingleArticle;
