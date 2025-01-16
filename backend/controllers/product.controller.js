const { Product } = require("../models/index");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to get products", error: error.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { product_name, image, description, price, category_name,inStock, AdminId } = req.body;

      if (!product_name || !description || !price || !category_name || !AdminId) {
        return res.status(400).send({ message: "Required fields are missing" });
      }

      const newProduct = await Product.create({
        product_name,
        image,
        description,
        price,
        category_name,
        inStock,
        AdminId,
      });

      res.status(201).send({ message: "Product created successfully", newProduct });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to create product", error: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const { product_name, image, description, price, category_name,  inStock } = req.body;

      if (!product_name || !description || !price || !category_name ) {
        return res.status(400).send({ message: "Required fields are missing" });
      }

      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }

      const updated = await Product.update(
        { product_name, image, description, price, category_name, inStock },
        { where: { id } }
      );

      if (updated[0] === 0) {
        return res.status(400).send({ message: "Failed to update product" });
      }

      res.status(200).send({ message: "Product updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to update product", error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }
      await Product.destroy({ where: { id } });
      res.status(200).send({ message: "Product deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to delete product", error: error.message });
    }
  },
};
