const { Admin } = require("../models/index");

module.exports = {
  getAllAdmins: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.status(200).send(admins);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to get admins", error: error.message });
    }
  },

  addAdmin: async (req, res) => {
    try {
      const { AdminName, email, password } = req.body;

      
      if (!AdminName || !email || !password) {
        return res.status(400).send({ message: "AdminName, email, password are required." });
      }

     
      const newAdmin = await Admin.create({ AdminName, email, password });
      res.status(201).send({ message: "Admin created successfully", newAdmin });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to create admin", error: error.message });
    }
  },

  updateAdmin: async (req, res) => {
    try {
      const { id } = req.params;
      const { AdminName, email, password } = req.body;

     
      if (!id || !AdminName || !email || !password) {
        return res.status(400).send({ message: "All fields id, AdminName, email, password are required." });
      }
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).send({ message: "Admin not found" });
      }

      
      const updated = await Admin.update({ AdminName, email, password }, { where: { id } });
      if (updated[0] === 0) {
        return res.status(400).send({ message: "Failed to update admin" });
      }

      res.status(200).send({ message: "Admin updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to update admin", error: error.message });
    }
  },

  deleteAdmin: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).send({ message: "Admin id is required" });
      }
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).send({ message: "Admin not found" });
      }
      await Admin.destroy({ where: { id } });
      res.status(200).send({ message: "Admin deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to delete admin", error: error.message });
    }
  },
};
