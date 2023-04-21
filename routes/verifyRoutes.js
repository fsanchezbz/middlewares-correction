const express = require('express');
const verifyRouter = express.Router();
const verifyToken = require('../controllers/verifyController.js');
const secure = require('../middlewares/secure');

verifyRouter.get('/:token', secure, verifyToken);

module.exports = verifyRouter;
