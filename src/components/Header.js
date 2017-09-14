import React, {Component} from 'react';
import './../styles/header.css';
import axios from 'axios';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
  }

  componentDidMount(){
    axios.get('/me').then(res => {
      console.log(res.data)
      this.setState({
        name: res.data.displayName
      })
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <main className="header">
        <h1>HEADER COMPONENT</h1>
        <a href="http://localhost:3030/login/facebook"><p>LOG IN</p></a>
        <p>Hello, {this.state.name}</p>
      </main>
    )
  }
}
