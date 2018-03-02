import Store from './Store'

export default class CounterStore extends Store {
  constructor(){
   super();
 }

  increment(){
    const updatedState = this.getState() + 1;
    this.setState(updatedState);
  }

  decrement(){
    const updatedState = this.getState() - 1;
    this.setState(updatedState);
  }
}

const counterStore = new CounterStore();
