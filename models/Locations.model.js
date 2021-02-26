const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    area: String,
    cities: [String]
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const Locations = mongoose.model("Locations", LocationsSchema);

module.exports = Locations;