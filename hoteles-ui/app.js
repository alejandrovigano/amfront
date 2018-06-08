const express = require('express');
const app = express();

var serveStatic = require('serve-static')

app.use('/', serveStatic(__dirname + '/dist/hoteles-ui/'));
module.exports = app;
