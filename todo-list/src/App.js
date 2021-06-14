import React from 'react';
import reactDom from 'react-dom';
import './App.css';


export default function App() {
  const [todos, setTodos]=React.useState(
    [
      {id:Math.random(), text:"laundry", done:false},
      {id:Math.random(), text:"Fruits", done:false},
      {id:Math.random(), text:"Exam paper", done:false}
    ]
  
  )

  return (
    <div className="App">
     <h1>Todo List</h1>
     <TodoList todos={todos} setTodos={setTodos} />
     <AddTodo  setTodos={setTodos}/>
     
    </div>
  );
}


function TodoList({todos, setTodos}){
  //console.log(" before todos "+JSON.stringify(todos))

  function handleToggleTodo(todo){
    const updateTodo=todos.map((t)=>
    t.id==todo.id?{    
      ...t,done:!t.done
    }
    :t
    );
    
   // console.log(" after todos "+JSON.stringify(todos))
    setTodos(updateTodo);
  }
 
  return(
    
    <ul>
      {todos.map(todo=>
       <li 
          onDoubleClick={()=>handleToggleTodo(todo)}
            style={{
              textDecoration:todo.done?'line-through':''
            }}
          key={todo.id}>
            {todo.text}
            <DeleteTodo  todo={todo} setTodos={setTodos}/>
        </li>       
          )}
    </ul>
  )
} 

function AddTodo({setTodos}){
  const inputRef=React.useRef();
 // console.log("current input  "+inputRef.current); 

  function handleAddTodo(event){
    event.preventDefault();   
    //console.log(event.target.elements.addTodo.value);
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

function DeleteTodo(){
  function handleDeleteTodo(){
    const confirmed=window.confirm("Do you want to delete this?");
    if(confirmed){

    }
  }
  return(
    <span role='button'
      onClick={handleDeleteTodo}
      style={{
        color:'red',
        fontWeight:'bold',
        marginLeft:10
      }}
    >x</span>
  )
}


