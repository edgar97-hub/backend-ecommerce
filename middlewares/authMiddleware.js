const authMiddleware = (req, res, next) => {
  next();
};

const isAdmin = (err, req, res, next) => {
  next();
};

module.exports = { isAdmin, authMiddleware };
