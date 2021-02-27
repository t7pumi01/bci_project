const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const Posting = require('./Posting.model');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    createdAt: Date
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const User = mongoose.model("User", UserSchema);
/*
User.deleteMany({}, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion")
    });

const test = new User({
    firstName: 'Testi',
    lastName: 'Käyttäjä',
    email: 'testi.kay@email.fi',
    password: bcrypt.hashSync('testipassu', 6),
    phoneNumber: '40073832',
    createdAt: Date.now()
});
test.save();

const admin = new User({
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin',
    password: bcrypt.hashSync('admin', 6),
    phoneNumber: '000',
    createdAt: Date.now()
});
admin.save();
*/
module.exports = User;