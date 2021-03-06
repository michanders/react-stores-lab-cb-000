class Store {
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  setState(state){
    this.state = state;
    for(var listener of this.listeners){
      listener(state);
    }
  }

  getState(){
    return this.state;
  }

  addListener(listener){
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((l) => listener !== l)
    };
    return removeListener;
  }
}

export default Store;
