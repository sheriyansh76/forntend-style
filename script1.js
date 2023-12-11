//  var data = require("./script")
//  console.log(data);






// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());






// var figlet = require("figlet");

// figlet("WELCOME TO HACK WORLD", function (err, data) {
//   if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });





const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('you are hack')
})

app.listen(3000)