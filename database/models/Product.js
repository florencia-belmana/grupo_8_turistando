
module.exports = function (sequelize, dataTypes) {
    let alias = "Products";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: dataTypes.STRING,
        allowNull: false,
        
      },
      title:{
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
        allowNull: true
      },
      updatedAt: {
        type: dataTypes.DATE,
        allowNull: true
      },
      deletedAt: {
        type: dataTypes.DATE,
        allowNull: true
      },
    
    };

    let config = {
      tableName: "products",
      timestamps: true,
    //  paranoid: false
    }

    let Products = sequelize.define(alias,cols,config);


// aca falta asociar=========
    
//CAMBIE EL NOMBRE DEL ARCHIVO, SIN LA S FINAL

  return Products;

}