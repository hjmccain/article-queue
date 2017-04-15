import React from 'react';
// import Moment from 'moment';
import { connect } from 'react-redux';
import { data } from './Data';
import SingleArticle from './SingleArticle';
import '../style/Articles.css';

const Articles = (props) => {

  if (props.sortedByCategory === 'Words') {
    props.wordsLowToHigh ?
    data.sort((a, b) => {
      return a.words - b.words
    }):
    data.sort((a, b) => {
      return b.words - a.words
    });
  }

  return (
    <tbody>
      {data.map(item => {
        return <SingleArticle
            key={item.id}
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
  submittedLowToHigh: state.submittedLowToHigh
});

export default connect(mapStateToProps)(Articles);
