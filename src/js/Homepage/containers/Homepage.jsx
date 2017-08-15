import React from 'react';
import { connect } from 'react-redux';

import changeMessage from '../../actions/ExampleActions';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <button
          onClick={() => this.props.dispatch(changeMessage())}
        >
          Change Message
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const example = state.get('example');
  return {
    message: example.get('message'),
  };
}

export default connect(mapStateToProps)(Homepage);
