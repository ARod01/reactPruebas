import React from 'react'
import './App.css';

function Helloworld(props){
  let { mytext } = props
  return(
    <p className="hello">{mytext}</p>
  )
}


function App() {
  return (
    <div className="App">este es mi primer componente 
      <Helloworld mytext="hola mundo con props"/>
    </div>
  );
}

export default App;
