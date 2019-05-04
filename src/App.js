import React, { Component } from 'react';
import './App.css';
import TodoEntry from "./components/TodoEntry";
import TodoItems from './components/TodoItems';
import TodoFooter from './components/TodoFooter';

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp" style={{backgroundImage: `url(${"../src/background.jpeg"})`
    }}>
      <TodoEntry/>
      <TodoItems/>
      <TodoFooter/>
      </div>
    );
  }
}

export default App;
