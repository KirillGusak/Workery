const router = require('express').Router();
const { Route } = require('../../db/models');

router.get('/main', async (req, res) => {
  let routes;
  try {
    routes = await Route.findAll({
      order: [['id', 'DESC']],
    });
  } catch (error) {
    return res.render('error', {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
  return res.render('main', { routes });
});

router.post('/main', async (req, res) => {
  let routes;
  try {
    routes = await Route.findAll({
      order: [['rating', 'desc']],
    });
    return res.json({ routes });
  } catch (error) {
    return res.render('error', {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
});

module.exports = router;
