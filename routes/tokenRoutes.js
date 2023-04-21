const express = require('express');
const tokenRouter = express.Router();
const createToken = require('../controllers/tokenController.js');

tokenRouter.post('/', createToken);

module.exports = tokenRouter;
