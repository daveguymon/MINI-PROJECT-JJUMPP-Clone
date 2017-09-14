import React, {Component} from 'react';
import './../styles/home.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from './../ducks/reducer';


class Home extends Component {

  componentDidMount(){
    axios.get('/me').then(res => {
      console.log(res.data)
      this.props.getUser(res.data.displayName)
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <main className="home">
        <section className="homeHeader">
          <div className="socialIcons">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </div>
          <div className="stacksIcon"></div>
          <div className="loginUser">
          <a href="http://localhost:3030/login/facebook"><p>LOG IN</p></a>
          </div>
        </section>
        <section className="homeBody">
          <p>We Simplify Online Presence Management.</p>
          <div className="exploreButton">
            <p>EXPLORE THE SPRINGBOARD</p>
          </div>
        </section>
        <h1>{this.props.name}</h1>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    name: state.userName
  }
}

export default connect(mapStateToProps, {getUser})(Home);
