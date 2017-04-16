import React from 'react';
import SingleArticle from './SingleArticle';
import '../style/Articles.css';
import uuidV4 from 'uuid/v4';

const Articles = (props) => {
  return (
    <tbody>
      {props.data.map(item => {
        return <SingleArticle
            key={uuidV4()}
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
