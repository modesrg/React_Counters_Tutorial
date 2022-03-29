import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  //Lifecyclehook
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("prevProps", prevProps);
    }
  }

  componentWillUnmount() {
    //Best place to do cleanup of timers, listeners, etc to prevent memory leaks
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            //disabled={this.isZero}
            className="btn btn-warning btn-sm"
          >
            Decrement
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  isZero() {
    return this.state.value <= 0;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //-----Dynamically format count number
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//Notes:
//1) state = {}; Includes any data that the Component needs
//2) React.Fragment Allows us to render various tags without using an unnecesary div
//3) We Can Dynamically render styles by using methods inside the class (rather than in the Render method so we can keep it clean)
//4) There are no "ngfor" loops like in angular, we have to use the map method (in this case we map "tags" to a list <li> item)
//5) For Lists we need to have a unique "Key" for each item so if the DOM changes it knows how to render it
//6) In JavaScript you can apply the && operator between non-boolean values (true && 'Hi there!' = Hi there!)
//7) The naming convention for handling events is "handleNameOfEvent"
//8) In the constructor "super()" calls the constructor of the parent class
//9) We can use arrow functions "= () =>" to bind methods without requiring a constructor to add bindings and handle events
//10) "setState()" is used to update the value of the states
//11) We can call a function with parameters from events like onClick by using an arrow function () => functionName(parameter)
//12) props vs. state:
//    - props: includes data that we give to a component (props is readonly)
//    - state: includes data that is local/private to that component (other components can't access it)
//13) The COMPONENT that OWNS a piece of the STATE shoud be the one MODIFYING it
//14) Components can raise events, naming convention: "onNameOfEvent"
//15) Single source of truth: important to not have 2 states of different components calling the same information
