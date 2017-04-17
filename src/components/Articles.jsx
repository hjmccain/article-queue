import React from 'react';
import SingleArticle from './SingleArticle';
import uuidV4 from 'uuid/v4';

const Articles = (props) => {
  const { data, sorting } = props;
  return (
    <tbody>
      {data.map((item, idx) => {
        let className;

        if (!sorting && idx > 9) {
          className = ((idx >= data.length - 10) && (idx <= data.length)) ?
            'article-info last' : 'article-info';
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
