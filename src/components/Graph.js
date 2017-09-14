import React, {Component} from 'react';
import './../styles/home.css';
import {Link} from 'react-router-dom';
import LoggedInHome from './LoggedInHome';
import About from './About';
import axios from 'axios';
import {getUser} from './../ducks/reducer';
import {connect} from 'react-redux';
import {Bar} from 'react-chartjs-2';


class Graph extends Component {

  componentDidMount(){
    console.log(this.props.location.pathname);
    axios.get('/me').then(res => {
      console.log(res.data.displayName)
      this.props.getUser(res.data.displayName)
    }).catch(err => console.log(err))
  }


  componentWillReceiveProps(nextProps){
    axios.get('/me').then(res => {
      console.log(res.data.displayName)
      nextProps.getUser(res.data.displayName)
    }).catch(err => console.log(err))
  }

  render(){

    const currPage = {color: "#00A8FF"}

    return (
      <main className="about">
        <section className="loggedInHomeHeader">
          <Link to="/home" className="logoLink">
            <div className="loggedInStacksIcon"></div>
          </Link>
          <div className="navigation">
            <p className="headerLink"><Link to="About">ABOUT</Link></p>
            <p className="headerLink"><Link to="Graph" style={this.props.location.pathname == "/Graph" ? currPage : null}>GRAPH</Link></p>
            <p className="headerLink"><a href="#">FEATURES</a></p>
            <p className="headerLink"><a href="#">PRICING</a></p>
            <p className="headerLink"><a href="#">BLOG</a></p>
            <p className="headerLink"><a href="#">SUPPORT</a></p>
          </div>
          <div className="loggedInUser">
          <p>Hello, {this.props.name}.</p>
          </div>
        </section>

        <section className="barChart">
        <Bar
        	data={this.props.chartData}
          width={100}
          height={40}
        	options={{

            title: {
              display: true,
              text: 'Logged-In User Facebook Data',
              fontSize: 25
            },
            legend: {
              display: false
            }
        	}}
        />
        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    chartData: state.chartData
  }
}

export default connect(mapStateToProps)(Graph);
