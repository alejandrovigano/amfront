const mongoose = require('mongoose');

let hotelSchema = mongoose.Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: [{
        type: String
    }]
});

module.exports = mongoose.model('Hotel', hotelSchema);