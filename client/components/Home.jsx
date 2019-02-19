import React from 'react'
import {connect} from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div>
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

export default connect(mapStateToProps)(Home)
