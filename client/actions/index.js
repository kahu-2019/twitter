import {getTweets as apiGetTweets} from '../api/tweets'

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
