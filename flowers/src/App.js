//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {flowers} from './flowers'


function App() {
  const title="";
  const images=[];
  for(const f in flowers){
    images.push(<img
      src={flowers[f].image}
      key={f}
      title={f}
      alt={f}
      role='button'
      width='100'
      height='100'
      onClick={displayFact()}
    />)
  }

  const flowerfacts=(    
    <div className="flowers">
      <h1> {title===''?'Click flowers for fun':title}</h1>
      {images}
      </div>
  );
  return (flowerfacts);
}

function displayFact(e){
  console.log(" log "+e);
  
}

export default App;
