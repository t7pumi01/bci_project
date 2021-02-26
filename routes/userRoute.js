var express = require("express");
var router = express.Router();
var bcrypt = require('bcryptjs');
const db = require("../models");

router.get("/", (req, res) => {
    db.User.find()
    .then(users => res.json(users).status(200))
    .catch(err => res.status(400).json("Error: " + err))
});

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

router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    db.User.findOne({email: email, password: password}, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(400).json("Something went wrong");
            }
            if (!user) {
                return res.status(404).json("Email and/or password incorrect");
            }
            return res.status(200).json("Login successful");
        })
});

router.post("/register", (req, res) => {
    const currTime = Date.now();
    const firstName= req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 6)
    const phoneNumber = req.body.phoneNumber
    const createdAt = currTime;
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