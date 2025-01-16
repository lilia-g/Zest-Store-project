const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const Router = express.Router();

// Routes
Router.get("/getall", getAllProducts); 
Router.post("/add", addProduct); 
Router.put("/:id", updateProduct); 
Router.delete("/:id", deleteProduct); 

module.exports = Router;
