import Store from './Store'

class CounterStore extends Store {
  constructor(){
   super(0);
 }

  increment(){
    var st = this.getState() + 1;
    this.setState(st);
  }

  decrement(){
    var st = this.getState() - 1;
    this.setState(st);
  }
}

const counterStore = new CounterStore();
export default counterStore;
