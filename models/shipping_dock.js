module.exports = (sequelize, DataTypes) => {
  const shippingDock = sequelize.define(
    "shippingDock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      status: DataTypes.ENUM("0", "1"),
      // status: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 1, // You can set a default value if needed
      //   validate: {
      //     isIn: [[0, 1]],
      //   },
      // },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "shippingDock",
    },
    {
      // underscoredAll: false,
      // underscored: false,
    }
  );

  return shippingDock;
};
