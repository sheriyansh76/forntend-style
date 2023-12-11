// var a = 12;
// var b = 22
// module.exports = {first:a, second:b};   
// // to run the code





const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)