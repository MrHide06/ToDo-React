import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//styling
import './App.scss'
//pages
import ClassTodo from './components/classComponents/ClassTodo'
import FunctionTodo from './components/functionComponents/FunctionTodo'
import Home from './components/Home'
//components
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/classTodo">
          <ClassTodo />
        </Route>
        <Route path="/functionTodo">
          <FunctionTodo />
        </Route>
      </Switch>
      {/* <Footer />     */}
      </div>
    </Router>
  );
}

export default App;
