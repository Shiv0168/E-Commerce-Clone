const express = require("express");
const { fetchCategories, createCategory } = require("../controllers/Categories.controller");

const router = express.Router();
//  /categories is already added in base path
router.route("/").get(fetchCategories).post(createCategory);

module.exports = router;
