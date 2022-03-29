import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  //Lifecyclehook
  constructor(props) {
    super(props);

    //We can set the value of the state on the constructor
    //We cannot call setState from the constructor because it can only be called when the element is rendered and placed in the DOM
    //this.state = this.props.something;
  }

  //Lifecyclehook
  componentDidMount() {
    //Best place to get data from the server and setState()
  }

  //#region Eventhandlers
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //this clones the counters
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //This is needed for the prevProps value on the componentDidUpdate lifehook
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; //this clones the counters
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //This is needed for the prevProps value on the componentDidUpdate lifehook
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //#endregion

  //Lifecyclehook
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

//LIFECYCLES & Lifecyclehooks:
//16) MOUNT (instance of component is created and inserted into the DOM), Lifecyclehooks: constructor, render componentDidMount
//17) UPDATE (change in "props" or "state"), Lifecyclehooks: render, componentDidUpdate
//17) UNMOUNT (component is removed from the DOM), Lifecyclehooks: componentWillUnmount
