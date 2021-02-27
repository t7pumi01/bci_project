var express = require("express");
var router = express.Router();
const db = require("../models");

router.get("/", function(req,res) {
    db.Locations.find({})
    .then((locations) => {
        res.json(locations).status(200);
    })
    .catch((err) => {
        res.json(err).status(400);
    })
});
module.exports = router;