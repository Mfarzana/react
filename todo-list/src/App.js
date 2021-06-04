import React from 'react';
import './App.css';


export default function App() {
  const [todos, setTodos]=React.useState(
    [
      {id:1, text:"laundry", done:false},
      {id:2, text:"Fruits", done:false},
      {id:3, text:"Exam paper", done:false}
    ]
  
  )

  return (
    <div className="App">
     <h1>Todo List</h1>
     <TodoList todos={todos} />
     <AddTodo  setTodos={setTodos}/>
    </div>
  );
}

function TodoList(props){
 
  return(
    <ul>
      {props.todos.map(todo=>
       <li key={todo.id} >{todo.text}</li>       
        )}
    </ul>
  )
} 

function AddTodo({setTodos}){
  const inputRef=React.useRef();
  console.log("current input  "+inputRef.current); 

  function handleAddTodo(event){
    event.preventDefault();   
    console.log(event.target.elements.addTodo.value);
    const text=event.target.elements.addTodo.value;
    const todo={
      id:4,
      text,
      done:false
    }
    setTodos(previosTodo=>{
      return previosTodo.concat(todo)
    })

    inputRef.current.value="";
  }

  return(
    <form onSubmit={handleAddTodo}>
       <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
      <button type="submit">Submit</button>
    </form>
  )
}




