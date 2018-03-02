import Store from './Store'

class CounterStore extends Store {
  constructor(){
   super(0);
 }

  increment(){
    var stat = this.getState() + 1;
    this.setState(stat);
  }

  decrement(){
    var stat = this.getState() - 1;
    this.setState(stat);
  }
}

const counterStore = new CounterStore();
export default counterStore;
