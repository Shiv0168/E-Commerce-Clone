const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controllers/Products.controller");

const router = express.Router();
//  /products is already added in base path
router.route("/").post(createProduct).get(fetchAllProducts);

router.route("/:id").get(fetchProductById).patch(updateProduct);

module.exports = router;
