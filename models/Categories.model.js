const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    title: String,
    subCategories: [String]
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});


const Categories = mongoose.model("Categories", CategoriesSchema);

/*Categories.deleteMany({}, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion")
    });
    
const furniture = new Categories({
    title: 'Furniture',
    subCategories: ['Tables', 'Chairs', 'Textiles', 'Beds', 'Couches', 'Dressers', 'Other Furniture']
});
furniture.save();
const electronics = new Categories({
    title: 'Electronics',
    subCategories: ['TVs', 'Mobile phones', 'PCs', 'PS consoles', 'Other Consoles', 'Other Electronics']
});
electronics.save();
const clothing = new Categories({
    title: 'Clothing',
    subCategories: ['Shirts', 'Outerwear', 'Pants', 'Dresses and skirts', 'Suits and cocktail dresses', 'Shoes', 'Accessories', 'Other Clothing']
});
clothing.save();
const sports = new Categories({
    title: 'Sports and outdoors',
    subCategories: ['Golf', 'Running', 'Skiing', 'Swimming', 'Fitness and yoga', 'Cycling', 'Camping and hiking', 'Ice skating', 'Other Sports And Outdoors Items']
});
sports.save();
*/
module.exports = Categories;