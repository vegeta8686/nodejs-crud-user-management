const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/getUsers", userController.fetchAllUsers);
router.get("/getUser/:id", userController.fetchUserById);
router.post("/createUser", userController.addUser);
router.put("/updateUser/:id", userController.modifyUser);
router.delete("/deleteUser/:id", userController.removeUser);

module.exports = router;
