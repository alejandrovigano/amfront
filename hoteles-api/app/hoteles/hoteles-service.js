"use strict";
let Hotel = require('./hoteles-model');

module.exports = {
    search: async (name, stars) => {
        try {
            let query = {};

            if(name) {
                query.name = { '$regex' : name, '$options' : 'i' }
            }

            if(stars){
                query.stars = { "$in": stars }
            }

            return await Hotel.find(query).sort({stars: -1}).exec();
        } catch (err) {
            throw err;
        }
    }
};