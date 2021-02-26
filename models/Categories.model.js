const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    title: String,
    subCategories: [String]
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;