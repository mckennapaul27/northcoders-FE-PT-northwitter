import React from 'react';
import './FormBox.css'

class FormBox extends React.Component {
    state = {
        tweet: ''
    };

    handleTweetChange = (event) => {
        console.dir(event.target.value);
        this.setState({
            tweet: event.target.value
        })
    }

    render() {
        return (
            <form id='TweetBox' style={{
                color: '',
                backgroundColor: ''
                }}>
                <h2>Tweet Something</h2>
                <textarea className='tweet-area' name="tweet" onChange={this.handleTweetChange} value={this.state.tweet}/>
                <p className='char-ref'>Characters left: {140-this.state.tweet.length}<span><button type='submit' disabled={this.state.tweet.length > 140} style={{color: 'white', backgroundColor: this.state.tweet.length > 140 ? 'red' : '#4AB3F4'}}>Tweet</button></span></p>                
            </form>
        )
    }
}

export default FormBox;