import React from 'react';
import moment from 'moment'

class TweetBox extends React.Component {
    state = {
        tweets: [],
        loading: true
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

const Tweet = props => {
    return (
        <div className='tweet-box'>
            <div className='tweet-box-img'>
                <img src={props.img} />   
            </div>
            <div>
                <h5>{props.name}    <span>@{props.screen_name}   </span><span>{props.time}</span></h5>
                <p>{props.text}</p>
            </div> 
        </div>        
    )
}


export default TweetBox;