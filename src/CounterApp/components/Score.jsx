import React from 'react';

export default class Score extends React.Component {
  render() {
    return (
      <div style={{
        border: '1px solid black',
        padding: '10px',
      }}
      >
        <h2>Score</h2>
        {this.props.value}
      </div>
    );
  }
}
