import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import APIChart from './components/APIChart';


export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/chart" component={ APIChart } />
        </Switch>
      </main>
    )
  }
}
