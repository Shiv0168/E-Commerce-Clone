const express = require("express");
const {
  fetchBrands,
  createBrand,
} = require("../controllers/Brands.controller");

const router = express.Router();
//  /brands is already added in base path
router.route("/").get(fetchBrands).post(createBrand);

module.exports = router;
