const router = require('express').Router();
const { Route, Comment, User } = require('../../db/models');
const checkAuth = require('../middlewares/allChecks');

router.get('/route/:id', async (req, res) => {
  const routeId = req.params.id;
  try {
    const route = await Route.findOne({ where: { id: routeId } });
    const comments = await Comment.findAll({ where: { route_id: routeId } });
    // console.log(route, 'heeeeeeeeey');
    // console.log(comments);
    res.render('info', { route, comments });
  } catch (error) {
    console.log(error);
  }
});

router.post('/route/:id', checkAuth, async (req, res) => {
  const { body, route_id } = req.body;
  try {
    await Comment.create({
      user_id: req.session.userId, body, route_id,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
