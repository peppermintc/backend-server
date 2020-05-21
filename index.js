const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(7000, () => {
    console.log('Backend Server is running on http://localhost:7000')
})
