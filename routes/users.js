const express = require("express");
const router = express.Router();
const {
  sendDrivers,
  getAllUsers,
  deleteUser,
} = require("../controllers/users");
router.get("/get-drivers", sendDrivers);
router.get("/get-users", getAllUsers);
router.delete("/users/:email", deleteUser);
module.exports = router;
