const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
    title: String,
    description: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories"
    },
    images: Array,
    price: Number,
    postedAt: { type: Date, default: Date.now },
    delivery: { pickup: Boolean, shipping: Boolean },
    location: {
        type: Schema.Types.ObjectId,
        ref: "Locations"
    }
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const Posting = mongoose.model("Posting", PostingSchema);

module.exports = Posting;