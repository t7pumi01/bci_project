const mongoose = require('mongoose');
const { config } = require('dotenv');

module.exports = () => {
    config();
    mongoose
    .connect(process.env.DB_URL, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Mongodb connected..');
    })
    .catch(err => console.log(err.message));
}