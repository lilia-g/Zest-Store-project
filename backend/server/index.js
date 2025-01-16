const express = require("express");
const connection= require("../models/index")
const cors = require('cors');
const App = express();
const port = 8080;
App.use(express.json());

App.use(express.static(__dirname + "/../react-client/dist"));
const ProductRoutes = require("../routers/product.router");
const AdminRoutes = require("../routers/admin.router");
App.use(cors());
App.use("/api/Product",ProductRoutes);
App.use("/api/Admin",AdminRoutes);

App.listen(port, () => {
    console.log(`app listening on http://127.0.0.1:${port}`);
  });
  