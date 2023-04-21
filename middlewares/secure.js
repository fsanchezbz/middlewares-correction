const secure = (req, res, next) => {
  const { token } = req.params;
  if (token && token.length > 3) return next();
  return res.sendStatus(403);
};

module.exports = secure;
