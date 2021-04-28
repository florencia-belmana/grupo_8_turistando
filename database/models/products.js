
module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      product: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: dataTypes.DECIMAL,
        allowNull: false,
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: dataTypes.TEXT,
      },
      createdAt: {
        type: dataTypes.DATE,
      },
      updatedAt: {
        type: dataTypes.DATE,
      },
      deletedAt: {
        type: dataTypes.DATE,
      },
      category_id: {
      type: DataTypes.INTEGER,
      }
    };

    let config = {
      tableName: "products",
      timestamps: true,
    //  paranoid: false
    }

    let Product = sequelize.define(alias,cols,config);

    
    Product.associate = models => {
      Product.belongsTo(models.Category, {
          as: 'category',
          foreignKey: 'category_id'
      })
  
  }

  return Product;

}