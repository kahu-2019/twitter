import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import SendTweet from './SendTweet'
import {getTweets} from '../actions'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getTweets())
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Welcome to Twitter!</h1>

          <Route exact path="/" component={Home} />
          <Route path="/:username/tweet" component={SendTweet} />
        </div>
      </Router>
    )
  }
}

export default connect()(App)
