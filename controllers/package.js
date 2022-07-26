const Package = require("../models/package");

exports.addPackage = async (req, res) => {
  try {
    const package = req.body;
    package.id = Date.now();
    const savedPackage = new Package(package);
    savedPackage.save().then((pck) => {
      return res.status(200).json({
        pck,
      });
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find(
      {},
      { createdAt: 0, updatedAt: 0, _id: 0 }
    ).sort({ updatedAt: -1 });
    if (packages.length > 0) {
      res.status(200).json({ packages });
    } else {
      res.status(404).json({
        message: "Not Found.",
      });
    }
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};
exports.deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    await Package.findOneAndDelete({ id }).exec((err, package) => {
      if (err) {
        res.status(400).json({
          err,
        });
      } else if (package) {
        res.status(200).json({
          package,
        });
      } else {
        res.status(404).json({
          message: "Not Found",
        });
      }
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};
