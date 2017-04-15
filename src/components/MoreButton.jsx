import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import '../style/MoreButton.css';

class MoreButton extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEnd: 10,
      buttonText: 'Load more',
      buttonClass: '',
      disabled: false
    }
  }

  moreArticles() {
    this.setState({ currentEnd: this.state.currentEnd += 10 });
    this.props.getData(this.state.currentEnd);
    if (this.state.currentEnd > 50) {
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

const mapDispatchToProps = (dispatch) => ({
  getData: (currentEnd) => {dispatch(actions.getData(currentEnd)) }
});

export default connect(null, mapDispatchToProps)(MoreButton);
