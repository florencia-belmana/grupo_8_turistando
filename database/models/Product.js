
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
        //quizas poniendo name: y aclarando field: product_name
        
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
      timestamps: true, //hay que arreglar created_at para q sea true
    //  paranoid: false //deleted_at
    }

    let Products = sequelize.define(alias,cols,config);


// aca falta asociar=========
    
//CAMBIE EL NOMBRE DEL ARCHIVO, SIN LA S FINAL

  return Products;

}