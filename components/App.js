import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
   }
   this.handleDecrement = actions.decrement.bind(this);
   this.handleIncrement = actions.increment.bind(this);
  }

  


  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({
        counter: state
      });
    })
  }

  componentWillUnmount () {
    this.removeListener();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
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

export default App;
