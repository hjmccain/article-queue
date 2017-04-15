import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import '../style/MoreButton.css';

class MoreButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: <i className="fa fa-plus fa-3x" aria-hidden="true"></i>,
      buttonClass: '',
      disabled: false
    }
  }

  changeText() {
    this.setState({
      buttonText: 'That\'s all!',
      buttonClass: 'disabled',
      disabled: true
    });
  }

  componentWillMount() {
    if ((this.props.currentEnd + 10) > 50) { this.changeText() }
  }

  moreArticles() {
    this.props.getData(this.props.currentEnd + 10);
    if ((this.props.currentEnd + 10) > 50) { this.changeText() }
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
