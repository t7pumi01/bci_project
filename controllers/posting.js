const User = require("../models/User.model").model;
const Posting = require("../models/Posting.model").model;
const postingController = {
    all (req, res) {
      // Returns all Slots
        Posting.find({})
            .exec((err, postings) => res.json(postings))
    }
  };module.exports = postingController;