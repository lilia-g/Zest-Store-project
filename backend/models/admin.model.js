module.exports = (connection, DataTypes) => {
    const Admin = connection.define(
      "Admin",
      {
        AdminName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      },
      {
        timestamps: false 
      }
    );
    return Admin;
  };
  