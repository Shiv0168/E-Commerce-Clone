const express = require("express");
const {
  createOrder,
  fetchOrdersByUser,
  deleteOrder,
  updateOrder,
  fetchAllOrders,
} = require("../controllers/Order.controller");

const router = express.Router();
//  /orders is already added in base path
router
  .post("/", createOrder)
  .get("/user/:userId", fetchOrdersByUser)
  .get("/", fetchAllOrders)
  .delete("/:id", deleteOrder)
  .patch("/:id", updateOrder);

module.exports = router;
