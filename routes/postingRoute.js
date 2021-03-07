var express = require("express");
var router = express.Router();
const db = require("../models");
const jwtAuth = require('./jwt-authenticate');

// Get all postings
router.get("/", function(req,res) {
    db.Posting.find()
    .then(postings => res.json(postings).status(200))
    .catch(err => res.status(400).json(err))
});

// Get postings by location
router.get("/location/:location", function(req,res) {
    db.Posting.find()
    .where('post.location').equals(req.params.location)
    .then(postings => res.json(postings).status(200))
    .catch(err => res.json(err).status(400))
});

// Get postings by category
router.get("/categories/:category", function(req,res) {
    db.Posting.find()
    .where('post.category').equals(req.params.category)
    .then(postings => res.json(postings).status(200))
    .catch(err => res.json(err).status(400))
});

// Get postings by date
router.get("/date/:date", function(req,res) {
    db.Posting.find()
        .where('post.postedAt').equals(req.params.date)
        .then(postings => res.json(postings).status(200))
        .catch(err => res.json(err).status(400))
});

// Create a new post as authorized user
// give token in header
router.post("/new", jwtAuth, function(req, res) {
    const newPost = new db.Posting({
        user_id: req.user.id,
        sellerName: req.user.firstName + " " + req.user.lastName,
        sellerEmail: req.user.email,
        post: {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            images: req.body.images,
            price: req.body.price,
            postedAt: req.body.postedAt,
            delivery: req.body.delivery,
            location: req.body.location
        }
    })
    newPost
      .save()
      .then(() => res.json("New post created!").status(200))
      .catch(err => res.status(400).json(err))
});

// Get posts made by the authorized user
// give token as header
router.get("/user", jwtAuth, function(req,res) {
    db.Posting.find()
    .where('user_id').equals(req.user.id)
    .then(postings => res.json(postings).status(200))
    .catch(err => res.json(err).status(400))
});
 
// Delete authorized user's post by post id
// give token as header
router.delete("/user/:id", jwtAuth, function(req,res) {
    db.Posting.deleteOne({_id: req.params.id}, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(400).json("Something went wrong");
        }
        return res.status(200).json("Deleted post");
    })
});

module.exports = router;