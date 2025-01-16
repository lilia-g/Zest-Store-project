const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("zest", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    throw err;
  });
  const Admin =require("./admin.model")(connection, DataTypes)
  const Product =require("./product.model")(connection, DataTypes)
  
Admin.hasMany(Product);
Product.belongsTo(Admin);


// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log(" tables created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });
module.exports = {Admin,Product};

