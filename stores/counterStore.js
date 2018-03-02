import Store from './Store'

class CounterStore extends Store {
  constructor(){
   super(0);
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
export default counterStore;
