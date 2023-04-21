const secure = (req, res, next) => {
  const { token } = req.query;
  if (token) return next();
  return res.sendStatus(403);
};

module.exports = secure;
