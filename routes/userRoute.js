var express = require("express");
var router = express.Router();
var bcrypt = require('bcryptjs');
const db = require("../models");
require('../db')();
var passport = require('passport');
var jwt = require('jwt-simple');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
var jwtSecretKey = process.env.SECRET
options.secretOrKey = jwtSecretKey;
passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    db.User.findOne(jwt_payload.id)
            .then(user => user ? done(null, user) : done(null, false))
}));

// Get all users
router.get("/", (req, res) => {
    db.User.find()
    .then(users => res.json(users).status(200))
    .catch(err => res.status(400).json("Error: " + err))
});

// Delete user by id
router.delete("/delete/:id", (req, res) => {
    db.User.deleteOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(400).json("Something went wrong");
        }
        if (!user) {
            return res.status(404).json("Email incorrect");
        }
        return res.status(200).json("Deleted user: " + req.params.email);
    })
});

// Login
router.get("/login", (req, res) => {  
    const email = req.body.email
    const send_password = req.body.password
    db.User.findOne({email: email}, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(400).json("Something went wrong");
            }
            else if (!user) {
                return res.status(404).json("Incorrect email");
            }
            else {
                if (bcrypt.compareSync(send_password, user.password) == true) {
                    const body = { id: user.id,
                            email : user.email };
                        const payload = { user : body };
                        const token = jwt.encode(payload, jwtSecretKey);

                        return res.json({ token }).status(200);
                    }
                    else {
                        res.json("Incorrect password").status(404);
                    }
                }
        })
});

// Register/create new user
router.post("/register", (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 6)
    const phoneNumber = req.body.phoneNumber
    const createdAt = Date.now()
    const newUser = new db.User({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      createdAt
    })
    newUser
      .save()
      .then(() => res.json("New user created!").status(200))
      .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;