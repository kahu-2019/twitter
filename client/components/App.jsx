import React from 'react'
import {connect} from 'react-redux'

import {getTweets} from '../actions'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getTweets())
  }

  render() {
    return (
      <div>
      <h1>Welcome to Twitter!</h1>
      <ul>
        {this.props.tweets.map(tweet => {
          return (
            <li>{tweet.text}</li>
          )
        })}
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(App)
