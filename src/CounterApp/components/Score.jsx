import React from 'react';

export default class Score extends React.Component {
  constructor() {
    super();
    console.log('constructor - Score');
  }

  componentDidMount() {
    console.log('componentDidMount - Score');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate - Score');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - Score');
  }

  render() {
    console.log('render - Score');

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
