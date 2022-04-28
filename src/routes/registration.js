const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Route } = require('../../db/models');
const checkAuth = require('../middlewares/allChecks');

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password, 5);
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: { email, name, password: hash },
    });
    if (!created) {
      res.redirect(('signin'));
    } else {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.email = user.name;
      res.redirect('profile');
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

router.get('/signin', (req, res) => {
  res.render('signin');
});
router.post('/signin', async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const passwordMatch = await bcrypt.compare(password, user?.password);

    if (passwordMatch) {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.name = user.name;
      res.redirect('profile');
    } else {
      res.render('error', { error: 'Can not find User' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/profile', checkAuth, async (req, res) => {
  const allRoutes = await Route.findAll({ where: { author: req.session.userId } });

  console.log(req.session.id, 'eeeeeeeeeee');
  console.log(allRoutes, 'nooooo');

  res.render('profile', {
    email: req.session.email, name: req.session.name, id: req.session.userId, allRoutes,
  });
});

router.get('/logout', (req, res) => {
  console.log('qweqweqweqwe');

  req.session.destroy();
  res.clearCookie('sid');
  res.redirect('/');
});





module.exports = router;
