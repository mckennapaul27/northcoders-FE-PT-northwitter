import React from 'react';
import moment from 'moment'
import Profile from './Profile';

class TweetBox extends React.Component {
    state = {
        tweets: [],
        loading: true,        
    }
    componentDidMount () {
        // always called after render
        fetch('https://nc-sprints-api.herokuapp.com/api/twitter/timeline')
        .then(res => {
           return res.json();
        })
        .then(body => {           
           this.setState({
            tweets: body.tweets,
            loading: false
           })
        })
    }
    
    render () {
        const {tweets} = this.state;
        return (
            <div>
                <h2>Tweets</h2>               
                {tweets.map(tweet => {
                   return <Tweet name={tweet.user.name} screen_name={tweet.user.screen_name} time={moment(tweet.created_at, moment.ISO_8601).fromNow()} text={tweet.text} img={tweet.user.profile_image_url}/>
                })}
            </div>
        )
    }
}

class Tweet extends React.Component {
    state = {
        hover: false,
        profile: '(i)' 
    }
    hoverOn = (event) => {
        this.setState({ 
            hover: true,
            profile: <Profile /> 
        });
    }
    hoverOff = (event) => { 
        this.setState({ 
            hover: false,
            profile: '(i)' 
        });    
    }
    
    render() {
        return (
            <div className='tweet-box'>
                <div className='tweet-box-img'> 
                    <img src={this.props.img} />
                    <div onMouseEnter={this.hoverOn} 
                        onMouseLeave={this.hoverOff} >                        
                    <div className='show-profile'>
                        <div>
                         </div>{this.state.profile}</div>                     
                        </div>                             
                    </div>
                
                <div>
                    <div className='tweet-stats'>
                        <p><strong>{this.props.name}</strong></p>
                        <p>@{this.props.screen_name}</p>
                        <p>{this.props.time}</p>
                    </div>                
                    <p>{this.props.text}</p>
                </div> 
            </div>        
        )
    }   
}

// const ProfileHover = props => {
//     return (
//         <div>
//            <Profile /> 
//         </div>
//     )
// }

export default TweetBox;