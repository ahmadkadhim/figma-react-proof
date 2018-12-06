import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './store/actions/payload.js';

class App extends Component {
  onButtonClick = () => {
    this.props.getPayload();
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    payload: state.api.payload
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPayload: () => dispatch(Actions.getPayload())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
