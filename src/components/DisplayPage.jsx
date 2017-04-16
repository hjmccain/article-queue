import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../state/actions';
import ArticleTable from './ArticleTable';
import MoreButton from './MoreButton';
import '../style/DisplayPage.css';
import mic from '../../public/Mic.png';

class DisplayPage extends React.Component {
  componentWillMount() {
    if (this.props.data.length === 0) {
      this.props.getData(this.props.currentEnd)
    }
  }

  render() {
    return (
      <div className="display-container">
        <img src={mic} alt="Mic.com logo"></img>
        <h2>/ unpublished</h2>
        <ArticleTable
          data={this.props.data}
          wordsLowToHigh={this.props.wordsLowToHigh}
          submittedLowToHigh={this.props.submittedLowToHigh} />
        <MoreButton currentEnd={this.props.currentEnd} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentEnd: state.currentEnd,
  data: state.data,
  wordsLowToHigh: state.wordsLowToHigh,
  submittedLowToHigh: state.submittedLowToHigh
});

export default connect(mapStateToProps, { getData })(DisplayPage);
