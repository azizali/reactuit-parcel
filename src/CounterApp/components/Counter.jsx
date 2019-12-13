import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    console.log('constructor - Counter');
    super(props);
    this.state = {
      userInput: 'Here',
    };
  }

  componentDidMount() {
    console.log('componentDidMount - Counter');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate - Counter');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - Counter');
  }

  render() {
    console.log('render - Counter');
    return (
      <div style={{
        border: '1px solid black',
        padding: '10px',
      }}
      >
        <h2>Counter</h2>
        <input
          onChange={(event) => {
            this.setState({
              userInput: event.target.value,
            }, () => {
              this.props.updateCounter(this.state.userInput);
            });
          }}
          type="text"
          value={this.state.userInput}
        />
        <button
          onClick={this.props.updateCounter}
          type="button"
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}
