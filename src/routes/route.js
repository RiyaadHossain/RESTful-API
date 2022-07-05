const express = require("express");
const router = express.Router();
const UsersCollection = require("../models/user");

// GET All Users
router.get("/users", async (req, res) => {
  try {
    const newUser = await UsersCollection.find();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
});

// GET a User
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id
    const newUser = await UsersCollection.findById(_id);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
});

// POST a User
router.post("/users", async (req, res) => {
  try {
    const newUser = new UsersCollection(req.body);
    const userCreated = await newUser.save();
    res.status(200).json(userCreated);
  } catch (err) {
   res.status(400).json(err)
  }
});

module.exports = router;
