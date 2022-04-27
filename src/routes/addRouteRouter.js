const router = require('express').Router();

router.get('/addRoute', (req, res) => {
  res.render('addRoute');
});

module.exports = router;
