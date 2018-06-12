import React from 'react';


class TrendsBox extends React.Component {
    state = {
        trends: [],
        loading: true
    }
    componentWillMount() {
        // always called before render
    }
    componentDidMount () {
        // always called after render
        fetch('https://nc-sprints-api.herokuapp.com/api/twitter/trends')
        .then(res => {
           return res.json();
        })
        .then(body => {
           this.setState({
               trends: body.trends,
               loading: false
           })
        })
    }
    render () {
        const {trends, loading} = this.state;
        if(loading) return null;
        
        return (
            <div className='trends'>
                <h2>Trends for you</h2>
                {/* {loading === true ? <p>Loading...</p> :  */}
                {trends.map(trend => {
                   return <Trend name={trend.name} url={trend.url} tweetVolume={trend.tweet_volume}/>
                })}
            </div>
        )
    }
}

const Trend = props => {
    return (
        <div>
            <h4><a href={props.url}>{props.name}</a></h4>
            <p>{props.tweetVolume} people are talking about this</p>
        </div>
    )
}    
  

export default TrendsBox;