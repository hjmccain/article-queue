import React from 'react';
import Moment from 'moment';
import '../style/SingleArticle.css';

const SingleArticle = (props) => {
  return (
    <tr className="article-info">
      <td className="article-element image">
        <div className="crop-img">
          <img src={props.imageUrl} alt=""></img>
        </div>
      </td>
      <td className="article-element article-title">
        <h3>{props.title}</h3>
      </td>
      <td className="article-element author"><p>{props.authorName}</p></td>
      <td className="article-element wordcount"><p>{props.words}</p></td>
      <td className="article-element submitted"><p>{Moment(props.published).fromNow()}</p></td>
    </tr>
  )
}

export default SingleArticle;
