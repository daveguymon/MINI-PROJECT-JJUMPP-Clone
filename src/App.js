import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoggedInHome from './components/LoggedInHome';
import About from './components/About';
import Graph from './components/Graph';


export default class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/home" component={ LoggedInHome } />
          <Route path="/about" component={ About } />
          <Route path="/graph" component={ Graph } />
        </Switch>
      </main>
    )
  }
}
