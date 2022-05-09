const router = require('express').Router();
const { Route, Comment, User } = require('../../db/models');
const checkAuth = require('../middlewares/allChecks');

router.get('/route/:id', async (req, res) => {

console.log('adasdasda');

  const routeId = req.params.id;
  try {
    const route = await Route.findOne({ where: { id: routeId } });
    const comments = await Comment.findAll({
      where: { route_id: routeId },
      raw: true,
    });
    console.log(comments, 'kolva');

    res.render('info', { route, comments });
  } catch (error) {
    console.log(error);
  }
});

router.post('/route/:id', checkAuth, async (req, res) => {
  const { body, route_id } = req.body;
  console.log(body, 'eeeeee');
  console.log(route_id, 'dddddd');
  try {
    const result = await Comment.create({
      user_id: req.session.userId, body, route_id,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
