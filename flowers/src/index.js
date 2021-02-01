import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import {flowers} from './flowers'

function displayFact(e){    
  console.log(" log "+e.target.alt);   
  console.log(" log "+flowers[e.target.alt].fact);  
  let facts = flowers[e.target.alt].fact;
  document.getElementById("fact").innerHTML = facts;
};


  const title="";
  const images=[];
  for(const f in flowers){
    images.push(<img
      src={flowers[f].image}
      className={f}
      key={f}
      title={f}
      alt={f}
      role='button'
      width='150'
      height='150'
      onClick={displayFact}
    />)
  }

  const flowerfacts=(    
    <div className="flowers">
      <h1> {title===''?'Click flowers for fun':title}</h1>
      {images}
      <p id='fact'></p>
      </div>
  );
  
ReactDOM.render(flowerfacts, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
