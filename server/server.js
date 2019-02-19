const path = require('path')
const express = require('express')
const server = express()

const tweetRoutes = require('./routes/tweets')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

// BrowserRouter extra
// server.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// })

server.use('/api/v1/tweets', tweetRoutes)

module.exports = server
