const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const postRoute = require('./routes/postingRoute');
const userRoute = require('./routes/userRoute');

require('./db')();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));

app.use('/post', postRoute);
app.use('/user', userRoute);
   
app.listen(process.env.PORT || 3000, () => {
    console.log("listening on 3000")
    });

module.exports = app;

