import React from 'react';
import SingleArticle from './SingleArticle';
import uuidV4 from 'uuid/v4';

const Articles = (props) => {
  return (
    <tbody>
      {props.data.map((item, idx) => {
        let className;

        if (!props.sorting) {
          className = ((idx >= props.data.length - 10) && (idx <= props.data.length)) ?
            className = 'article-info last' : className = 'article-info';
        } else {
          className = 'article-info';
        }

        return <SingleArticle
            key={uuidV4()}
            articleClassName={className}
            id={item.id}
            title={item.title}
            published={item.publish_at}
            imageUrl={item.image}
            words={item.words}
            authorName={`${item.profile.first_name} ${item.profile.last_name}`}
          />
      })}
    </tbody>
  )
}

export default Articles;
