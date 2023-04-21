const pool = require('../DB/dbConnect');
const ErrorHandler = require('../utils/errorHandler.js');

const createUser = async (req, res, next) => {
  try {
    const { userName, token_id } = req.body;
    if (!userName || !token_id) throw new ErrorHandler(400, 'Missing fields');

    const {
      rows: [user],
    } = await pool.query(
      'INSERT INTO users (userName, token_id) VALUES ($1, $2) RETURNING *;',
      [userName, token_id]
    );

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
