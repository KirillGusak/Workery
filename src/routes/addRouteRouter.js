const router = require('express').Router();
const checkAuth = require('../middlewares/allChecks');
const { Route } = require('../../db/models');

router.get('/addroute', (req, res) => {
  res.render('addRoute');
});

router.post('/addroute', checkAuth, async (req, res) => {
  const {
    title, city, description, start, end,
  } = req.body;
  try {
    await Route.create({
      title, city, description, start, end, author: req.session.userId, rating: 0, length: '2km',
    });
    res.redirect('/main');
  } catch (error) {
    res.render('error', {
      message: 'Не удалось добавить запись в базу данных.',
      error: {},
    });
  }
});
module.exports = router;
