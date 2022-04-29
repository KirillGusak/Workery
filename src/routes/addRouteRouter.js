const { Route } = require('../../db/models');
const router = require('express').Router();

router.get('/addRoute', (req, res) => {
  res.render('addRoute');
});
router.post('/addRoute/Route', async (req, res) => {
  await Route.create(req.body);
  res.redirect('/');
});

// router.get('/addRoute/Route', (req, res) => {
//   res.json({ a: 'красная площадь', b: 'орджоникидзе 11' });
// });

router.post('/addRoute/Route', async (req, res) => {
  await Route.create(req.body);
  res.redirect('/');
});

router.post('/addRoute/:id', async (req, res) => {
  const route = await Route.findOne({ where: { id: req.params.id } });
  // console.log(route);
  //   res.render('info', { route });
  res.json(route);
});

router.get('/addRoute/:id/', async (req, res) => {
  const route = await Route.findOne({ where: { id: req.params.id } });
  console.log(route);
  res.render('info', { route });
});

module.exports = router;
