"use strict";
const hotelesRoutes = require('./hoteles/hoteles-routes');

module.exports = (app) => {
    app.use('/hoteles', hotelesRoutes);
};