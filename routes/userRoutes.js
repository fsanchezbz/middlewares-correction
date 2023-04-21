const express = require('express');
const userRouter = express.Router();
const createUser = require('../controllers/userController.js');

userRouter.post('/', createUser);

module.exports = userRouter;
