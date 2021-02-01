## Component
**A component is a small, reusable chunk** of code that is responsible for one job. That job is often to render some HTML.
React requires that the **first letter of components be capitalized**. If the first letter of a name is capitalized, then JSX knows it’s a component instance;if not, then it’s an HTML elemen

#### Import React
import React from 'react' creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.

```
## In order to use React, we must first import the React library. 
## import JavaScript objects,imported object contains React-related methods
import React from 'react'; 
```
#### Import ReactDOM
import ReactDOM from 'react-dom' creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.render().

```
import ReactDOM from 'react-dom';  
```
#### Create a Component Class

```
## React.Component is a JavaScript class. To create your own component class, you must subclass React.Component
## All class components have some methods and properties 
## React.Component is a property on the object which was returned by import React from 'react'

## Component class names must always be capitalized
class MyComponent extends React.Component {
  ## React component render() method returns the elements that make up the component. For instance,
  render() {
    return <h1>Hello world!</h1>;
  }
}
```

```
## <MyComponent /> is a Component 
ReactDOM.render(<MyComponent />, document.getElementById('app')); 

```
