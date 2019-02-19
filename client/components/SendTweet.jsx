import React from 'react'
import {connect} from 'react-redux'

import {sendTweet} from '../actions'

class SendTweet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.dispatch(sendTweet(this.state, this.props.match.params.username))
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea name="text" rows="10" cols="80" placeholder="Enter Tweet here" onChange={this.handleChange.bind(this)}/><br/>
          <button>Tweet</button>
        </form>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     tweets: state.tweets
//   }
// }

export default connect()(SendTweet)
