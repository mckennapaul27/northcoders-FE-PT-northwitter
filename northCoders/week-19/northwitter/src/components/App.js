import React, { Component } from 'react';

import './App.css';
import FormBox from './FormBox';
import TrendsBox from './TrendsBox';
import TweetBox from './TweetBox';
import Profile from './Profile'
import classNames from 'classnames';

class App extends Component {
  state = {};
  render () {
    return (     
    <div className='main'>
      <nav className="navbar navbar-expand-lg fixed-top ">
          <a className="navbar-brand" href="">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-4">          
            <li className="nav-item">
            <a className="nav-link" href="">Moments</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " href="">Notifications</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " href="">Messages</a>
            </li>          
            <li className="nav-item">
            <a className={classNames('nav-link ', 'tweet-btn')} href="#">Tweet</a>
            </li>
          </ul>        
        </div>        
    </nav>
    
    <div className='container'>
      <div className="sidebar">
        <Profile />          
        <TrendsBox />  
      </div> 
      <div className='contain-main'>
        <div>
          <FormBox />
        </div> 
        <div>        
          <TweetBox />
        </div>
      </div>
      
    </div>
      

    </div>
        
    
   
      
    )
  }
  
  
}

export default App;
