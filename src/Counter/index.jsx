import React from 'react';
import { Page as Timesheets } from '../Timesheets';

// function Counter({ initialCount }) {
//   return (
//     <div>
//       Counter:
//       {' '}
//       {initialCount}
//       {' '}
//       <button type="button">+</button>
//     </div>
//   );
// }

class Counter extends React.Component {
  state = {
    name: 'Intuit',
    score: 100,
    counter: 0,
  };
  // constructor(props) {
  //   super(props);
  //   // Has to be an Object
  //   this.state = {
  //     name: 'Intuit',
  //     score: 100,
  //     counter: 0,
  //   };
  // }

  // CLASS PROPERTIES
  handleClick = () => {
    // DO NOT MUTATE OR MODIFY STATE "DIRECTLY"
    // this.state.counter = this.state.counter + 1;

    // CORRECT WAY
    // this.setState({
    //   counter: this.state.counter + 1,
    // }, () => {
    //   console.log('Done Cb', this.state.counter);
    // });

    this.setState((prevState, prevProps) => {
      console.log(prevState, prevProps);
      return { counter: prevState.counter + prevState.score };
    }, () => {
      console.log('Done Cb', this.state.counter);
    });

    console.log('button was clicked', this.state.counter);
  }

  render() {
    return (
      <div style={{
        border: '1px solid black',
        padding: '10px',
      }}
      >
        Counter State:
        {' '}
        {this.state.counter}
        <br />
        InitialCount:
        {' '}
        {this.props.initialCount}
        <br />
        {' '}
        Name:
        {' '}
        {this.state.name}
        <br />
        Score:
        {' '}
        {this.state.score}
        <button
          onClick={this.handleClick}
          type="button"
        >
          +
        </button>
        <Timesheets value={this.state.score} />
      </div>
    );
  }
}


export default Counter;
