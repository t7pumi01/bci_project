const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
    user_id: String,
    post: {
        title: { type: String, required: [true, "Title required"] },
        description: { type: String, required: [true, "Description required"] },
        category: [{ type: String, required: [true, "Category required"] }],
        images: [ String ],
        price: { type: Number, required: [true, "Title required"] },
        postedAt: { type: String, required: [true, "Date required"] },
        delivery: { pickup: { type: Boolean, required: [true, "Delivery option required"]},
                    shipping: { type: Boolean, required: [true, "Delivery option required"]}},
        location: [{ type: String, required: [true, "Location required"] }]
     }
});

const Posting = mongoose.model("Posting", PostingSchema);
module.exports = Posting;