import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object descructuring to avoid using "props" all the time
    const { onReset, counters, onIncrement, onDecrement, onDelete } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btm-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} //Used internally by react
            onIncrement={onIncrement} //or {this.props.onIncrement}
            onDecrement={onDecrement} //or {this.props.onDecrement}
            onDelete={onDelete} //or {this.props.onDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
