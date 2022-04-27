const router = require("express").route();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");

router.get("/signup", (req, res) => {
  res.render("signup");
});
