import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/USer';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/users" component={Users} />
    </BrowserRouter>
    );
  }
}

export default App;
