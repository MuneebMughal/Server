const express = require("express");
const router = express.Router();
const {
  addPackage,
  getAllPackages,
  deletePackage,
  updatePackageStatus,
  getDriverPackages,
} = require("../controllers/package");
router.post("/create-package", addPackage);
router.get("/get-packages", getAllPackages);
router.get("/get-packages/:id", getDriverPackages);
router.delete("/packages/:id", deletePackage);
router.put("/packages/:id", updatePackageStatus);
module.exports = router;
