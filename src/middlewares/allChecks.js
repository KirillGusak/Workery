const checkAuth = (req, res, next) => {
  if (!req.session?.userId) {
    return res.redirect('/main');
  }
  next();
};

module.exports = checkAuth;
