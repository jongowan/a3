const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  )
  console.log('Middleware')
  next()
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "SP1",
      content: "First post from the server"
    },
    {
      id: "2",
      title: "SP2",
      content: "Second post from the server"
    }
  ]

  res.status(200).json({
    message: "This is fetched data",
    posts: posts
  })
})

module.exports = app;
