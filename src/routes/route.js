const express = require("express");
const router = express.Router();
const UsersCollection = require("../models/user");

// GET All Users
router.get("/users", async (req, res) => {
  try {
    const allUsers = await UsersCollection.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err)
  }
});

// GET a User
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id
    const singleUser = await UsersCollection.findById(_id);
    res.status(200).json(singleUser);
  } catch (err) {
    res.status(400).json(err)
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

// PATCH a User
router.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id
    const userUpdated = await UsersCollection.findByIdAndUpdate(_id, req.body, {new: true});
    res.status(200).json(userUpdated);
  } catch (err) {
   res.status(400).json(err)
  }
});

// DELETE a User
router.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id
    const deletedUser = await UsersCollection.findByIdAndDelete(_id);
    res.status(200).json(deletedUser);
  } catch (err) {
   res.status(400).json(err)
  }
});

module.exports = router;
