import request from 'superagent'

export function getTweets() {
  return request.get('/api/v1/tweets')
  .then(res => res.body)
}

export function sendTweet(tweet, username) {
  console.log({tweet})
  return request.post('/api/v1/tweets/' + username)
  .send(tweet)
  .then(res => res.body)
}
