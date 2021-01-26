## JSX
* JSX stands for JavaScript XML.
* **JSX allows us to write HTML in React**.
* JSX is an extension of the JavaScript language based on ES6
* Web browsers can’t read it. If a JavaScript file contains **JSX code**, then that file will**have to be compiled**. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
```
app.js
<h1>Hello world</h1>
// This JSX element looks exactly like HTML! but  difference is that is in a JavaScript file, instead of in an HTML file.
// <h1>Hello world</h1> **called JSX element**

// Nested HTML Code
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

// Nested JSX expressions
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
 
```
### Rendering JSX

## References:
* https://www.codecademy.com/learn/react-101
* https://www.w3schools.com/react/default.asp
