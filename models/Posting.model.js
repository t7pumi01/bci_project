const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
    user_id: String,
    post: {
        title: String,
        description: String,
        category: [String],
        images: Array,
        price: Number,
        postedAt: String,
        delivery: { pickup: Boolean, shipping: Boolean },
        location: [String]
     }
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const Posting = mongoose.model("Posting", PostingSchema);
/*
Posting.deleteMany({}, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion")
    });
*/
module.exports = Posting;