const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

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
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const passwordMatch = await bcrypt.compare(password, user?.password);

    if (passwordMatch) {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.nickName = user.nickName;
      res.redirect('profile');
    } else {
      res.render('error', { message: 'Can not find User' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('logout', (req, res) => {
  req.session.destroy();
  res.clearCookie();
  res.redirect('/');
});

module.exports = router;
