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

router.post('/:id/vote', async (req, res) => {
  try {
    const findPost = await Route.findOne({ where: { id: req.params.id } });
    const addedLike = await findPost.increment('votes', { by: 1 });

    res.json({ addedLike });
    // res.redirect('/posts');
  } catch (error) {
    console.log('errrrrrrror');
  }
});

module.exports = router;
