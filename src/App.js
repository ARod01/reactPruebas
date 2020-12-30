import React from 'react'
import './App.css';

/* function Helloworld(props){
  let { mytext, text1, text2 } = props
  return(
    <p className="hello">{ mytext } { text1 } { text2 }</p>
  )
}
 */

 //usando una clase

class Helloworld extends React.Component{
  render(){
    return(
      <p className="hello">{ this.props.mytext } { this.props.text1 } { this.props.text2 }</p>
    );
  }
}


function App() {
  return (
    <div className="App">este es mi primer componente 
      <Helloworld mytext="hola mundo con props"/>
      <Helloworld text1="texto con otro props"/>
      <Helloworld mytext="hola " text2="soy tercer props"/>
    </div>
  );
}

export default App;
