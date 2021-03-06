import React from 'react';
import moment from 'moment';
import '../style/SingleArticle.css';

const SingleArticle = (props) => {
  return (
    <tr className={props.articleClassName}>
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
      <td className="article-element submitted"><p>{moment(props.published, "YYYY-M-DD h:mm:ss").fromNow()}</p></td>
    </tr>
  )
}

export default SingleArticle;
