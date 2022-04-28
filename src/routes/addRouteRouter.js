const { Route } = require('../../db/models');
const router = require('express').Router();

router.get('/addRoute', (req, res) => {
  res.render('addRoute');
});
router.post('/addRoute/Route', async (req, res) => {
  await Route.create(req.body);
  res.redirect('/');
});

router.post('/route/:id', async (req, res) => {
  const route = await Route.findOne({ where: { id: req.params.id } });
  console.log(route, 'qwertyuiop[]');
  res.json(route);
});
module.exports = router;
