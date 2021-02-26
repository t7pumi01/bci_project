const express = require('express');
const router = express.Router();
const postController = require('../../controllers/post')
const postingController = require('../../controllers/posting')
router.get('/post', postController.all);
router.get('/retrievePostings', postingController.all);
router.post('/postCreate', postController.create);
module.exports = router;