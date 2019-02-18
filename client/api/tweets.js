import request from 'superagent'

export function getTweets() {
  return request.get('/api/v1/tweets')
  .then(res => res.body)
}
