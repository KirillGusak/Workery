const router = require('express').Router();
const { Route } = require('../../db/models');


router.delete('/deleteRoute', async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Route.destroy({ where: { id } });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
