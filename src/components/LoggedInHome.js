import React, {Component} from 'react';
import './../styles/home.css';
import {Link} from 'react-router-dom';
import About from './About';
import APIChart from './APIChart';
import axios from 'axios';
import {getUser} from './../ducks/reducer';
import {connect} from 'react-redux';



class LoggedInHome extends Component {


  componentDidMount(){
    axios.get('/me').then(res => {
      console.log(res.data.displayName)
      this.props.getUser(res.data.displayName)
    }).catch(err => console.log(err))
  }



  render(){

    return (
      <main className="home">
        <section className="loggedInHomeHeader">
          <div className="loggedInStacksIcon"></div>
          <div className="navigation">
            <p className="headerLink"><Link to="About">ABOUT</Link></p>
            <p className="headerLink"><Link to="APIChart">GRAPH</Link></p>
            <p className="headerLink"><a href="#">FEATURES</a></p>
            <p className="headerLink"><a href="#">PRICING</a></p>
            <p className="headerLink"><a href="#">BLOG</a></p>
            <p className="headerLink"><a href="#">SUPPORT</a></p>
          </div>
          <div className="loggedInUser">
          <p>Hello, {this.props.name}.</p>
          </div>
        </section>
        <section className="homeBody">
          <p>We Simplify Online Presence Management.</p>
          <div className="exploreButton">
            <p>EXPLORE THE SPRINGBOARD</p>
          </div>
        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    name: state.userName
  }
}

export default connect(mapStateToProps, {getUser})(LoggedInHome);
