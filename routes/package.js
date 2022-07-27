const express = require("express");
const router = express.Router();
const {
  addPackage,
  getAllPackages,
  deletePackage,
  updatePackageStatus,
} = require("../controllers/package");
router.post("/create-package", addPackage);
router.get("/get-packages", getAllPackages);
router.delete("/packages/:id", deletePackage);
router.put("/packages/:id", updatePackageStatus);
module.exports = router;
