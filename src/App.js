import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi(){
  alert('Hi')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 也不过如此嘛</h1>
        </header>
        <p className="App-intro">
          编辑 <code>src/App.js</code> 就能改变页面展示
          <button onClick={sayHi}>点我</button>
        </p>
      </div> // => JS
    );
  }
}

export default App;
