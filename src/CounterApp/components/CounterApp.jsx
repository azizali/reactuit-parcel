import React from 'react';
import produce from 'immer';
import Counter from './Counter'
import Score from './Score'

export default class CounterApp extends React.Component {
  constructor(props){
    super(props)
    console.log('constructor - CounterApp');
    this.state = {
      counter: this.props.initialCount,
      userInfo: {
        name: 'intuit',
        options: [{
          properOne: 'one',
          properTwo: 'two'
        }],
        age: 12
      }
    };
  }

  componentDidMount(){
    console.log('componentDidMount - CounterApp');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate - CounterApp');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount - CounterApp');
  }

  handleClick = () => {
    // DO NOT MUTATE STATE
    // this.state.userInfo.name = 'Something Else'
    const newState = produce(this.state, (draftState)=>{
      draftState.userInfo.options[0].properOne = 100,
      draftState.userInfo.name = 'Something Else'
      draftState.counter = draftState.counter + 1
    })
    this.setState(newState);
  }

  render() {
    console.log('render - CounterApp');
    return (
      <div style={{
        border: '1px solid black',
        padding: '10px',
      }}
      > 
        <h1>CounterApp</h1>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <div style={{ display: 'flex' }}>
          <Counter
            updateCounter={this.handleClick}
            value={this.state.counter} />
          {this.state.counter !==0 && <Score value={this.state.counter} />}
        </div>
      </div>
    );
  }
}
