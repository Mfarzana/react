import React from 'react';
import ReactDOM, { render } from 'react-dom';
import "./index.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstValue:0,
      secondValue:0
    }
    this.handleChange=this.handleChange.bind(this);
  }   
  
  handleChange=e=>{
    const{name,value}=e.target;
    console.log(name+" "+value);
    this.setState({[name]: parseInt(value)});
  }
  add=()=>{
    const{firstValue,secondValue}=this.state;
    alert(" addition "+(firstValue+secondValue));
    
  }
  sub=()=>{
    const{firstValue, secondValue}=this.state;
    alert("subtraction "+(firstValue-secondValue));
  }

  render(){
    return(
    <div>
        <input placeholder="first value" value={this.state.firstValue} name="firstValue" 
        onChange={e=>this.handleChange(e)} />
        <input placeholder="secod value" value={this.state.secondValue} name="secondValue"
        onChange={e=>this.handleChange(e)} />
        <button onClick={this.add}> +</button>
        <button onClick={this.sub}>-</button>
      
    </div>
    )
  }
}

render(<App/>, document.getElementById("root"));

