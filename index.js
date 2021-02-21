const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const app = express();
require('./db')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
app.listen(process.env.PORT || 3000, () => {
    console.log("hello")
});

