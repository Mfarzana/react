## Component
**A component is a small, reusable chunk** of code that is responsible for one job. That job is often to render some HTML.
React requires that the **first letter of components be capitalized**. If the first letter of a name is capitalized, then JSX knows it’s a component instance;if not, then it’s an HTML elemen

```
## create a variable named React, creates an object that contains properties needed to make React work
## In order to use React, we must first import the React library. 
## import JavaScript objects,imported object contains React-related methods
import React from 'react'; 

## import JavaScript objects,imported object contains React-related methods
## interacting with the DOM
import ReactDOM from 'react-dom';  

class MyComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
## <MyComponent /> is Component 
ReactDOM.render(<MyComponent />, document.getElementById('app')); 

```
