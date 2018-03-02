import React from 'react';
import actions from '../actions';
import counterStore from '../stores/counterStore'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    }
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(event){
    event.preventDefault();
    actions.increment();
  }

  handleDecrement(event){
    event.preventDefault();
    actions.decrement();
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({
        counter: state
      })
    })
  }

  componentWillUnmount () {
    this.removeListener();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}
