
module.exports = function (sequelize, dataTypes) {
    let alias = "Products";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
       
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: dataTypes.STRING,
        
        
      },
      title:{
        type: dataTypes.STRING,
        
        
      },
      price: {
        type: dataTypes.DECIMAL,
       
      },
      image: {
        type: dataTypes.STRING,
        
      },
      description: {
        type: dataTypes.TEXT,
      },
      created_at: {
        type: dataTypes.DATE,
        
      },
      updated_at: {
        type: dataTypes.DATE,
        
      },
      deleted_at: {
        type: dataTypes.DATE,
        
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