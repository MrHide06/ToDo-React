import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ClassTodo from './components/classComponents/ClassTodo'
import FunctionTodo from './components/functionComponents/FunctionTodo'

function App() {
  return (
    <div className="App">
      <ClassTodo />
      <FunctionTodo />
    </div>
  );
}

export default App;
