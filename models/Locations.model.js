const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    area: String,
    cities: [String]
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const Locations = mongoose.model("Locations", LocationsSchema);
/*
Locations.deleteMany({}, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion")
    });

const loc1 = new Locations ({
    area: 'North Ostrobothnia',
    cities: ['Kuusamo', 'Oulu', 'Haapajärvi', 'Nivala', 'Pyhäjärvi', 'Pudasjärvi', 'Raahe', 'Haapavesi', 'Kalajoki', 'Oulainen', 'Ylivieska']
});
const loc2 = new Locations ({
    area: 'Lapland',
    cities: ['Rovaniemi', 'Tornio', 'Kemi', 'Sodankylä', 'Keminmaa', 'Kemijärvi', 'Inari', 'Kittilä']
});
loc1.save();
loc2.save();
*/
module.exports = Locations;