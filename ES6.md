Destructuring is a JavaScript expression that makes it possible to **unpack values from arrays, or properties from objects**, into distinct variables.
## Destructuring Assignment in ES6- Arrays
**JavaScript, Extract data from an array**
```
    var numbers = [1,2,3];
    var one = numbers[0];
    var two = numbers[1];  
    console.log(one); // 1
    console.log(two); // 2
```  
**Basic Destructuring:**
```
const numbers = [1,2,3];
const [one, two, three] = numbers;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
```
**Skipping Items:**
```
const numbers = [1,2,3];
const [,,three] = numbers;
console.log(three); //3
```
**Rest Items:**
```
const numbers = [1,2,3,4,5,6,7,8,9];
const [one,two,three,...others] = numbers;
console.log(one);  //1
console.log(others); //[4, 5, 6, 7, 8, 9]
```
## Reference
* https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/
* https://dev.to/sarah_chima/destructuring-assignment---arrays-16f
