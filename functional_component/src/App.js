import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './Components/Greet';
import welcome from './Components/welcome';

class App extends Component{
  render(){

  
  return (
    <div className="App">
      <Greet>Hello</Greet>
      <welcome>Hello</welcome>
    </div>
  );
}
}

export default App;
