const pool = require('../DB/dbConnect');
const ErrorHandler = require('../utils/errorHandler.js');

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.params;
    if (!token) throw new ErrorHandler(400, 'Missing token');

    const { rows: tokens } = await pool.query(
      'SELECT * FROM token WHERE value LIKE $1;',
      [token]
    );
    if (!tokens.length) throw new ErrorHandler(401, 'Invalid token');

    const { rows: tokenUsers } = await pool.query(
      'SELECT * FROM users WHERE token_id=$1;',
      [tokens[0].id]
    );
    if (!tokenUsers.length) throw new ErrorHandler(401, 'No user');

    return res.json({ success: 'Token is valid' });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
