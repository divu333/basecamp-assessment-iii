import React, { Component } from 'react';
import './App.css';

const welcome = "Welcome";
const react = " new to React";
const learn = "My first component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Welcome/>
        <Myreact/>
        <Learn/>
        </header>
      </div>
    );
  }
}


class Welcome extends Component {
  render(){
    return(
      <h1 className="App-title"> {welcome}</h1>
      );
  }
}


class Myreact extends Component {
  render(){
    return(
      <h1 className="App-title"> {react}</h1>
      );
  }
}


class Learn extends Component {
  render(){
    return(
      <h1 className="App-title"> {learn}</h1>
      );
  }
}



export default App;
