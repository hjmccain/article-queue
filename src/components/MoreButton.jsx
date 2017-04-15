import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import '../style/MoreButton.css';

class MoreButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Load more',
      buttonClass: '',
      disabled: false
    }
  }

  moreArticles() {
    let newEnd = this.props.currentEnd + 10
    this.props.getData(newEnd);
    if (newEnd > 50) {
      this.setState({
        buttonText: 'That\'s all!', buttonClass: 'disabled', disabled: true
      });
    }
  }

  render() {
    return (
      <div className="button-container">
        <button
          className={this.state.buttonClass}
          onClick={this.moreArticles.bind(this)}
          disabled={this.state.disabled}>{this.state.buttonText}
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreButton);
