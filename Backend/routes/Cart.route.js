const express = require("express");
const {
  addToCart,
  fetchCartByUser,
  deleteFromCart,
  updateCart,
} = require("../controllers/Cart.controller");

const router = express.Router();
//  /products is already added in base path
router
  .post("/", addToCart)
  .get("/", fetchCartByUser)
  .delete("/:id", deleteFromCart)
  .patch("/:id", updateCart);

module.exports = router;
