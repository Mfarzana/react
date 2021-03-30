import React from 'react';
import ReactDOM from 'react-dom';

class AuthForm extends React.Component{
    constructor(props){
        super(props);
        this.state={            
            username:"",
            password:"",
            auth:false
        }
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value});
        console.log("usernaem "+this.state.password);
    }   
    handleUsernameChange=(e)=>{
        this.setState({username:e.target.value});
        console.log("pass "+this.state.username);
    }

    authorize(e){
       // console.log("fuction auth "+this.state.username +" "+this.state.password);
        const un="test";
        const pas="";
        console.log(" ay "+this.auth);
       // const auth= (username===this.state.username) && (password===this.state.password);    
      
       // console.log(" auth "+auth)
       // this.setState({auth:auth});
    }
    render(){
        
        const form=(
            <div>
                <form　action="#">
                   Username: <input type="text" name="username" placeholder="Enter Name" onChange={this.handlePasswordChange}/><br/>
                   Password: <input type="password" name="password"  placeholder="Enter Password" onChange={this.handleUsernameChange}/><br/>               
                    <input onClick={this.authorize} type="button" />
                </form>

            </div>
        );
        return(
            <div>
                <h1>{this.state.auth?' Login Information ':'Enter Correct Username and Password'}</h1>
                <h2>{this.state.auth?'Username:{this.state.username} and Password:{this.state.password}': form }</h2>
                
            </div>
        )
            
    }
}

export default AuthForm
