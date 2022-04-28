const router = require('express').Router();
const { Route } = require('../../db/models');
const {User} = require ()
router.get('/route/:id', async (req, res) => {
  const routeId = req.params.id;
  console.log(routeId);

  try {
    const route = await Route.findOne({ where: { id: routeId } });
    const 
    res.render('info', { route });
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
