# React_Counters_Tutorial
Cheatsheet project for React JS with notes about constructors, state, props, event handlers and more

Origin: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=649s

**TIPS & CHEATSHEET:**

 - *<React.Fragment>* Allows us to render various tags without using an unnecesary div
 - We Can Dynamically render styles by using methods inside the class (rather than in the Render method so we can keep it clean).
 - There are no "ngfor" loops like in angular, we have to use the *map* method to create lists or tables.
 - For Lists we need to have a unique "Key" for each item so if the DOM changes it knows how to render it
 - In JavaScript you can apply the && operator between non-boolean values (true && 'Hi there!' = Hi there!)
 - The naming convention for handling events are "handleNameOfEvent" or "onNameOfEvent"
 - In the constructor it's required to use "super()" to call the constructor of the parent class
  ```
    constructor(props) {
    super(props);
    this.state = this.props.something;
  }
  ```
 - We can use arrow functions "= () =>" to bind methods without requiring a constructor to add bindings and handle events
   ```
   onClick={() => this.props.onDelete(this.props.counter.id)}
   ```
 - We cannot call setState from the constructor because it can only be called when the element is rendered and placed in the DOM
 - When a component is rendered all of its children are rendered recursively
   
***PROPS vs. STATE:***
- props: includes data that we give to a component (readonly)
- state: includes data that is local/private to that component (other components can't access it)

***LIFECYCLES & LIFECYCLE HOOKS:***
- MOUNT (instance of component is created and inserted into the DOM)
  - Lifecyclehooks: constructor, render, componentDidMount
- UPDATE (change in "props" or "state")
  - Lifecyclehooks: render, componentDidUpdate
- UNMOUNT (component is removed from the DOM)
  - Lifecyclehooks: componentWillUnmount

***LIFTING THE STATE & SINGLE SOURCE OF TRUTH:*** We can have multiple components that share the same data and are in sync. There should be a single "source of truth" for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow. (we use props for that)

***STATELESS FUNCTIONAL COMPONENT:*** We can use arrow functions to render simple components but SFCs do not have lifecycle hooks
```
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
```
***OBJECT DESTRUCTURING:*** JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their own variables.
```
const { onReset, counters, onIncrement, onDecrement, onDelete } = this.props;
```
