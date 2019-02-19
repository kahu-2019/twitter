import {getTweets as apiGetTweets, sendTweet as apiSendTweet} from '../api/tweets'

export function getTweets() {
  return dispatch => {
    return apiGetTweets()
    .then(tweets => {
      dispatch(saveTweets(tweets))
    })
  }
}

export function saveTweets(tweets) {
  return {
    type: 'SAVE_TWEETS',
    tweets: tweets,
  }
}

export function sendTweet(tweet, username) {
  return dispatch => {
    return apiSendTweet(tweet, username)
    .then(result => {
      dispatch(getTweets())
    })
  }
}
