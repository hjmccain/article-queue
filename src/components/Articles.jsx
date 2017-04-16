import React from 'react';
import { connect } from 'react-redux';
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
    </tbody>
  )
}

const mapStateToProps = (state) => ({
  sortedByCategory: state.sortedByCategory,
  wordsLowToHigh: state.wordsLowToHigh,
  submittedLowToHigh: state.submittedLowToHigh,
  data: state.data
});

export default connect(mapStateToProps)(Articles);
