import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import ArticleTable from './ArticleTable';
import MoreButton from './MoreButton';
import '../style/DisplayPage.css';
import mic from '../../public/Mic.png';

class DisplayPage extends React.Component {
  componentWillMount() {
    this.props.getData(this.props.currentEnd || 10)
  }

  render() {
    return (
      <div className="display-container">
        <img src={mic} alt="Mic.com logo"></img>
        <h2>/ unpublished</h2>
        <ArticleTable />
        <MoreButton />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentEnd: state.currentEnd
});

const mapDispatchToProps = (dispatch) => ({
  getData: (currentEnd) => {dispatch(actions.getData(currentEnd)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);
