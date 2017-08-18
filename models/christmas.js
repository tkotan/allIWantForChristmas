const mongoose = require('mongoose');

const christmasSchema = mongoose.Schema({
    name: String,
    price: String,
    description: String,
    purchased: Boolean
});

const Christmas = mongoose.model('Christmas', christmasSchema);

module.exports = Christmas;
