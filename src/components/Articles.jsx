import React from 'react';
import { data } from './Data';
import SingleArticle from './SingleArticle';

const Articles = () => {
  return (
    <div>
      {data.map(item => {
        return <SingleArticle
            id={item.id}
            title={item.title}
            published={item.publish_at}
            shares={item.shares}
            views={item.views}
            imageUrl={item.image}
            url={item.url}
            words={item.words}
            authorId={item.profile.id}
            authorName={`${item.profile.first_name} ${item.profile.last_name}`}
            tagArray={item.tags}
          />
      })}
    </div>
  )
}

export default Articles;
