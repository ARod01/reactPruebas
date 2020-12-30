import React from 'react'
import './App.css';

function Helloworld(){
  return(
    <p>hola mundo</p>
  )
}


function App() {
  return (
    <div className="App">este es mi primer componente 
      <Helloworld/>
    </div>
  );
}

export default App;
