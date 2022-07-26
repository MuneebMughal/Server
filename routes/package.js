const express = require("express");
const router = express.Router();
const {
  addPackage,
  getAllPackages,
  deletePackage,
} = require("../controllers/package");
router.post("/create-package", addPackage);
router.get("/get-packages", getAllPackages);
router.delete("/packages/:id", deletePackage);
module.exports = router;
