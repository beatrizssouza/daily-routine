const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { usuario } = req.body;
  try {
    if (await User.findOne({ usuario })) {
      return res.status(400).send({ error: "User already exists" });
    }
    console.log(req.body);
    if (req.body) {
      const user = await User.create(req.body);
      if (!user) {
        return res.status(400).send({ error: `user failed  ` });
      } else {
        console.log(user);
        user.password = undefined;
        return res.send({ user });
      }
    } else {
      return res.status(400).send({ error: `not req.body  ` });
    }
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: `Registration failed  ` });
  }
});

module.exports = (app) => app.use("/auth", router);
