### Hook
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.
**What does useState return?** It returns a **pair of values: the current state and a function** that updates it. This is why we write **const [count, setCount] = useState()**. This is **similar to this.state.count and this.setState**.

```
## import the useState Hook from React
 1:  import React, { useState } from 'react';
 2: 
## the Example component, we declare a new state variable by calling the useState Hook. it return a pair of values: the current state and a function
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:    return (
 7:      <div>
 8:        <p>You clicked {count} times</p>
 ## user clicks, call setCount with a new value. React will then re-render the Example component, passing the new count value to it.
 9:        <button onClick={() => setCount(count + 1)}>
10:         Click me
11:        </button>
12:      </div>
13:    );
14:  }
```

### References
* https://reactjs.org/docs/hooks-state.html