const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");


const admins = [
  {
    adminId: 1,
    AdminName: "Admin",
    email: "admin@email.com",
    password: "admin", 
  },
];


const {
  getAllAdmins,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");


Router.get("/getall", getAllAdmins);
Router.post("/add", addAdmin);
Router.put("/:id", updateAdmin);
Router.delete("/:id", deleteAdmin);

// Login route
//code does'nt work ahhhhhhh 
Router.post("/login", (req, res) => {
  const { email, password } = req.body;


  const admin = admins.find((a) => a.email === email);
  if (!admin) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  if (bcrypt.compareSync(password, admin.password)) {
    res.status(200).json({
      adminId: admin.adminId,
      AdminName: admin.AdminName,
      email: admin.email,
    });
  } else {
    return res.status(401).json({ message: "Invalid email or password." });
  }
});

module.exports = Router;
