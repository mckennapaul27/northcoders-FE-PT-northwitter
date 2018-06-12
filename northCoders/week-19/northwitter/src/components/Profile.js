import React from 'react';

class Profile extends React.Component {
    state = {
        name: '',
        screen_name: '',
        profile_image_url: '',
        profile_banner_url: '',        
        tweets: 0,
        following: 0,
        followers: 0
    }
    componentDidMount () {
        // always called after render
        fetch('https://nc-sprints-api.herokuapp.com/api/twitter/users/CuriousMau')
        .then(res => {            
           return res.json();
        })
        .then(body => {
            console.log(body.user.screen_name)
           this.setState({
                name: body.user.name,
                screen_name: body.user.screen_name,
                profile_image_url: body.user.profile_image_url,
                profile_banner_url: body.user.profile_banner_url,       
                tweets: body.user.statuses_count,
                following: body.user.friends_count,
                followers: body.user.followers_count
           })
        })
        .catch(err => console.log(err))
    }
    render () {
        return (
            <div className='profile'>
                <img className='background-img' src={this.state.profile_banner_url} alt="aus"/>
                <div>
                    <img className='profile-pic' src={this.state.profile_image_url} alt="aus"/>
                    <div className='profile-box'>
                        <h4>{this.state.name}</h4>
                        <p>{this.state.screen_name}</p>
                    </div>                    
                </div>
                <div className='profile-stats'>
                    <h6>Tweets</h6>
                    <h6>Following</h6>
                    <h6>Followers</h6>
                    <h5>{this.state.tweets}</h5>
                    <h5>{this.state.following}</h5>
                    <h5>{this.state.followers}</h5>
                </div>
                

            </div>
        )
    }
}

export default Profile;