const User = require("../models/userModel");

//get all users collection from db
const fetchAllUsers = (req, res) => {
  User.find()
    .then((response) => res.status(200).json({ response }))
    .catch((error) => res.status(500).json({ error }));
};

//get specific user from db
const fetchUserById = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((response) => res.status(200).json({ response }))
    .catch((err) => res.send(500).json({ err }));
};

//adding the user into db
const addUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });
  user
    .save()
    .then((response) => res.status(201).json({ response }))
    .catch((err) => res.status(500).json({ err }));
};

//update the specific user in db
const modifyUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const options = { new: true };
    const result = await User.findByIdAndUpdate(userId, data, options);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

//deletes the user from db
const removeUser = (req, res) => {
  const userId = req.params.id;
  User.findByIdAndDelete(userId)
    .then((response) => res.status(200).json({ response }))
    .catch((err) => res.status(500).json({ err }));
};

module.exports = {
  fetchAllUsers,
  fetchUserById,
  addUser,
  modifyUser,
  removeUser,
};
