const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: [true, "Email required"] },
    password: { type: String, required: [true, "Password required"] },
    phoneNumber: String,
    createdAt: Date
});

const User = mongoose.model("User", UserSchema);
module.exports = User;