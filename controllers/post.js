const User = require("../models/User.model").model;
const Posting = require("../models/Posting.model").model;
const postController = {
  all(req, res) {
    User.find({}).exec((err, postings) => res.json(postings));
  },
  create(req, res) {
    var requestBody = req.body;
    var newPost = new Posting({
      title: requestBody.title,
      description: requestBody.description,
      category: requestBody.category,
      images: requestBody.images,
      price: requestBody.price,
      postedAt: Date.now(),
      delivery: requestBody.delivery,
      location: requestBody.location
    })
    newPost.save();
    var newPosting = new User({
        email: requestBody.email,
        password: requestBody.password,
        postings: newPost._id
    });
    newPosting.save((err, saved) => {
        User.find({ _id: saved._id })
        .populate("postings")
        .exec((err, user) => res.json(user)) 
    })
  }
};

module.exports = postController;