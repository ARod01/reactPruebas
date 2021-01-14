//import React from 'react'
import React, { Component } from 'react'; //importar componentes desde React
import './App.css';
import tareas from './sample/task.json';
import Tasks from './components/Tasks.js';
class App extends Component{
  state = {
    tasks: tareas
  }
  render(){
    return <Tasks tasks={ this.state.tasks }/>
  }
}

export default App;
