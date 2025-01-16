module.exports = (connection, DataTypes) => {
  const Product = connection.define(
    "Product",
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      category_name: {
        type: DataTypes.STRING,  
        allowNull: false,
      },
    
      inStock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      AdminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Product;
};
