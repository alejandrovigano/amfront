"use strict";
const express = require('express');
const router = express.Router();
const asyncMW = require('./../common/async-middleware')
const hotelesController = require('./hoteles-controller');

router.get('/',asyncMW(hotelesController.search));

module.exports = router;