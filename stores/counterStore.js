import Store from './Store'

class CounterStore extends Store {
  constructor(){
   super(0);
 }

  increment(){
    const stat = this.getState() + 1;
    this.setState(stat);
  }

  decrement(){
    const stat = this.getState() - 1;
    this.setState(stat);
  }
}

const counterStore = new CounterStore();
export default counterStore;
