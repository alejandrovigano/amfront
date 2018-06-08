"use strict";
const hotelesService = require('./hoteles-service');
const Responses = require('./../common/responses')

module.exports = {
    search : async (req, res) => {
        let name = req.query.name
        let stars = (req.query.stars) ? req.query.stars.split(',') : null;
        let result = await hotelesService.search(name, stars);
        Responses(res).ok(result);
    }
};