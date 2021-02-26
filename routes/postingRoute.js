var express = require("express");
var router = express.Router();
const db = require("../models");

router.get("/", function(req,res) {
    db.Posting.find({})
    .then((postings) => {
        res.json(postings).status(200);
    })
    .catch((err) => {
        res.json(err).status(400);
    })
});
//https://medium.com/@mendes.develop/joining-tables-in-mongodb-with-mongoose-489d72c84b60
router.post("/user/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    db.Posting.create(req.body)
      .then(function(dbPost) {
        return db.User.findOneAndUpdate({ _id: req.params.id }, { postings: dbPost._id }, { new: true });
      })
      .then(function(dbUser) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  
module.exports = router;