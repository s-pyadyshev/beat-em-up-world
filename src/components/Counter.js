import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
// connect is a higher-order function, which is a fancy way of saying it returns a function when you call it. 
// And then calling that function with a component returns a new (wrapped) component.
// What connect does is hook into Redux, pull out the entire state, and pass it through the mapStateToProps function that you provide. 
// This needs to be a custom function because only you will know the “shape” of the state in Redux.
export default connect(mapStateToProps)(Counter);
// connect passes the entire state as if to say, “Hey, tell me what you need out of this jumbled mess.”
// The object you return from mapStateToProps gets fed into your component as props. 
// The example above will pass state.count as the value of the count prop: the keys in the object become prop names, 
// and their corresponding values become the props’ values. So you see, this function literally defines a mapping from state into props.