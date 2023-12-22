const express = require("express");
const logger = require("morgan");
const app = express();
require("dotenv").config();
app.use(logger("dev"));
const cors = require("cors");
const DBConnection = require("./config/Config");
DBConnection();

const port = process.env.PORT || 8081;
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

app.use("/auth", require("./routes/Auth.route"));
app.use("/cart", require("./routes/Cart.route"));
app.use("/orders", require("./routes/Order.route"));
app.use("/users", require("./routes/User.route"));
app.use("/products", require("./routes/Products.route"));
app.use("/brands", require("./routes/Brands.route"));
app.use("/categories", require("./routes/Categories.route"));

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
