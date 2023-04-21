const pool = require('../DB/dbConnect');
const ErrorHandler = require('../utils/errorHandler.js');

const createToken = async (req, res, next) => {
  try {
    const { value } = req.body;
    if (!value) throw new ErrorHandler(400, 'Missing value');

    const {
      rows: [token],
    } = await pool.query('INSERT INTO token (value) VALUES ($1) RETURNING *;', [
      value,
    ]);

    res.status(201).json(token);
  } catch (error) {
    next(error);
  }
};

module.exports = createToken;
