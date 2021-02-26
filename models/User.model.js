const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    createdAt: Date,
    postings: [{
        type: Schema.Types.ObjectId,
        ref: "Posting"
    }]
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;