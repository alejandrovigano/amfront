const express = require('express');
const bodyParser = require('body-parser');
const crossDomainMW = require('./app/common/crossdomain-middleware');
const configRoutes = require('./app/config-routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add headers
app.use(crossDomainMW);

configRoutes(app);

module.exports = app;