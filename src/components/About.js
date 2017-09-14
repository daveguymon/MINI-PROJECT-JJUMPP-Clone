import React, {Component} from 'react';
import './../styles/home.css';
import {Link} from 'react-router-dom';
import APIChart from './APIChart';
import axios from 'axios';
import {getUser} from './../ducks/reducer';
import {connect} from 'react-redux';



class About extends Component {


  componentDidMount(){
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

    return (
      <main className="about">
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
        <section className="aboutBody">
          <div className="aboutHeader">
            <p>Leadership</p>
            <div className="headerUnderline"></div>
          </div>
          <div className="teamBios">
            <div className="teamMember">
              <div data-content="Chad is the CEO of JJUMPP. He strongly believes that you should never make decisions based on fear. While that means making bold decisions for the business, it also means he’s a bit reckless on his dirtbike. He enjoys traveling with his beautiful wife and working with the team here at JJUMPP." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/Chad-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">CHAD INGRAM</p>
                <p className="memberPosition">CEO</p>
            </div>

            <div className="teamMember">
              <div data-content="When Nathan isn’t managing the development of JJUMPP’s products, he is working on his 1968 Chevelle or in the garden. He truly believes that you should never ever give up; if something needs to get done, you get it done. Nathan loves social events with friends and family. Ironically enough, he hates computers yet he works on them every single day." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/Nate-Final.png" alt="profile pic"/>
              </div>
                <p className="memberName">NATHAN CALL</p>
                <p className="memberPosition">CPO</p>
            </div>

            <div className="teamMember">
              <div data-content="Not only is Amber our COO, she is also our office free throw star! Her guiding philosophy is “listen to understand” before responding. Amber is an adventure junky and loves activities such as skydiving and longboarding. She secretly binge eats hot cheetos in her office, but is always happy to share!" className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/amber-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">AMBER JOHNSON</p>
                <p className="memberPosition">COO</p>
            </div>

            <div className="teamMember">
              <div data-content="Easily the best dressed member of the executive team, James brings the same attention to JJUMPP’s marketing content. He has started two tech companies, the first of which he sold as a sophomore in college, and the second was acquired by JJUMPP. He’s also worked as a program director for the John Volken Academy. When he isn’t in the office, James is spending time with his wife and daughter." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/james-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">JAMES GEORGIANNA</p>
                <p className="memberPosition">CMO</p>
            </div>

            <div className="teamMember">
              <div data-content="Allen was too busy to take a picture because he won't stop working. He does have an uncanny resemblence to this sillhouette, however. That will have to do for now." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/ana-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">ALLEN KREUTZKAMP</p>
                <p className="memberPosition">CFO</p>
            </div>

            <div className="teamMember">
              <div data-content="Often referred to the office ping pong champion, Brittany is our ‘numbers girl.’ She takes care of the payroll, refunds, and is the CEO’s right hand woman. When Brittany is not working she is either ripping it up on the soccer field or hanging out with her family. She strives to work hard and be her best self, ignoring the haters." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/Britt-Final.png" alt="profile pic"/>
              </div>
                <p className="memberName">BRITTANY PETERSON</p>
                <p className="memberPosition">EXECUTIVE ASSISTANT</p>
            </div>

            <div className="teamMember">
              <div data-content="Kim is currently enrolled in the Witness Protection Program, which explains her lack of a picture. Come to think of it, none of us have actually ever met Kim. . . Is she on the payroll?" className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/ana-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">KIM CARTER</p>
                <p className="memberPosition">CONTROLLER</p>
            </div>

            <div className="teamMember">
              <div data-content="Truman is our resident geek. He is a passionate creator and user experience designer. He loves watching sci-fi movies with the subtitles on, being outdoors (but only if no grasshoppers are guaranteed) and building things. Truman believes that you should always ‘be present’ no matter what you are doing." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/tru-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">TRUMAN HALLADAY</p>
                <p className="memberPosition">CREATIVE DIRECTOR</p>
            </div>

            <div className="teamMember">
              <div data-content="Oscar is a man for the people, and the people love Oscar. He loves leading the sales team, inspiring them with his motto: Anything is possible if you really want it that bad. He’s an unabashed lover of video games. You can find him at a baseball game or home with his family relaxing. His favorite part of the job is helping the other sales agents and business owners have success." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/oscar-bro.png" alt="profile pic"/>
              </div>
                <p className="memberName">OSCAR GONZALEZ</p>
                <p className="memberPosition">DIRECTOR OF SALES</p>
            </div>

            <div className="teamMember">
              <div data-content="She might claim youngest in the office but Isabella plays a key role as the Team Lead of Customer Care. One day she hopes to own a swimwear company in Hawaii. Work is most rewarding when she sees customers develop the skills to operate the software independently. Outside of work, she’s most likely hanging with her friends and family, playing some basketball, or writing some poetry." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/bella.png" alt="profile pic"/>
              </div>
                <p className="memberName">ISABELLA HARRINGTON</p>
                <p className="memberPosition">CUSTOMER CARE MANAGER</p>
            </div>

            <div className="teamMember">
              <div data-content="From aesthetics school to software – that’s Olivia Merritt. You’ll usually find her at the front desk day dreaming of the beach. Out of the office, she loves to shop, do makeup, and hangout with her friends. “Shut up and just try,” is her mantra as she strives to be her best personally and professionally. Oh, and if you ask her, the Rock definitely deserves to be the Sexiest Man Alive every year." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/liv-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">OLIVIA MERRITT</p>
                <p className="memberPosition">RECRUITER</p>
            </div>

            <div className="teamMember">
              <div data-content="In the words of Jimmy, working at JJUMPP has “been filled with shaving cream to my face, buckets of water on my head, a lot of high fives, and a lot of good times.” He spends his spare time with his boy and one day they want to buy a fishing boat. Jimmy is known for his reliability around the office, not to mention his physique. He’s a gym addict." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/jimmy-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">JIMMY HANSEN</p>
                <p className="memberPosition">SALES COACH</p>
            </div>

            <div className="teamMember">
              <div data-content="Dan loves code. In fact, in his spare time he researches new technology and watches tutorials. The most rewarding part of his job is building a software that helps small businesses. One day, Dan hopes to build the next Facebook, or at least something of equal importance. Stay around the office late enough and you’ll probably see Dan still coding." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/dan-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">DAN LE</p>
                <p className="memberPosition">SENIOR SOFTWARE ENGINEER</p>
            </div>

            <div className="teamMember">
              <div data-content="If you wanna learn about our software, talk to Anastacia. She leads our Account Creation department where she helps business owners understand and optimize the Springboard. She loves her husband, art, and tattoos. At home, you’ll find her watching Game of Thrones or discussing a book. One day she hopes to get a master’s in psychology." className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/ana.png" alt="profile pic"/>
              </div>
                <p className="memberName">ANASTACIA OTVOS</p>
                <p className="memberPosition">ACCOUNT CREATION LEAD</p>
            </div>

            <div className="teamMember">
              <div data-content="Will is a true renaissance man. Not only is he skilled in web development, but he loves hockey, skateboarding, wakeboarding, volleyball, reading, and most importantly, playing cards. Will loves the satisfaction of publishing something that represents the company. His motto? “There is nothing that I can’t master.”" className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/will-final-sexy-.png" alt="profile pic"/>
              </div>
                <p className="memberName">WILLIAM FRANKLYN</p>
                <p className="memberPosition">DIRECTOR OF WEB DEV</p>
            </div>

            <div className="teamMember">
              <div data-content="Dave is actually not on the leadership team JJUMPP. In fact, he doesn't even work here (yet). Dave just snuck in the backdoor and planted himself here because. . . YOLO!" className="image">
                <img src="https://jjumpp.com/wp-content/uploads/2017/05/ana-final.png" alt="profile pic"/>
              </div>
                <p className="memberName">DAVE GUYMON</p>
                <p className="memberPosition">SOFTWARE ENGINEER</p>
            </div>

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

export default connect(mapStateToProps, {getUser})(About);
