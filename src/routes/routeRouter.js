const router = require('express').Router();
const { Route, Comment, User } = require('../../db/models');

router.get('/route/:id', async (req, res) => {
  const routeId = req.params.id;
  try {
    const route = await Route.findOne({ where: { id: routeId } });
    const comments = await Comment.findAll({ where: { route_id: routeId } });
    console.log(route);
    console.log(comments);
    res.render('info', { route, comments });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
