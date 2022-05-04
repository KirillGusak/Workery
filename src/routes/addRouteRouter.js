const router = require('express').Router();
const { Route } = require('../../db/models');

router.get('/addRoute', (req, res) => {
  res.render('addRoute');
});
router.post('/addRoute/Route', async (req, res) => {
  const {
    title, city, description, start, end, rating,
  } = req.body;

  await Route.create({
    title,
    city,
    description,
    start,
    end,
    rating,
    author: req.session.userId,
  });
  res.redirect('/');
});

router.post('/addRoute/:id', async (req, res) => {
  const route = await Route.findOne({ where: { id: req.params.id } });

  res.json(route);
});

router.get('/addRoute/:id/', async (req, res) => {
  const route = await Route.findOne({ where: { id: req.params.id } });

  res.render('info', { route });
});

module.exports = router;
