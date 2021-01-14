//import React from 'react'
import React, { Component } from 'react'; //importar componentes desde React
import './App.css';
import tareas from './sample/task.json';

class App extends Component{
  state = {
    task: tareas
  }
  render(){
    return <div>
      { this.state.task.map((e) => <h3>{e.titulo}</h3>) }
    </div>
  }
}

export default App;
