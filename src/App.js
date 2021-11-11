import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './StrictAcess';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <nav>
      <ul>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/about'>About</Link></li>
       <li><Link to='/users'>Users</Link></li>
       <li><Link to='/strict-acess'>Strict acess</Link></li>
      </ul>
    </nav>
    <Switch>
    <Route exact path="/users/:id" render={ (props) => (<Users {...props} greetingMessage={"Good Morning"} />)} 
    />
    <Route
    path="/strict-acess"
    render={ () => (
      <StrictAcess user={{username: 'joao', password: '1234'}} />
    )}
    />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
