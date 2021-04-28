module.exports = (sequelize, dataTypes) => {
    let alias = "Category"
    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
    }

    let config = {
        tableName: 'categories',
        timestamps: true,
        paranoid: true

    }

    let Category = sequelize.define(alias, columns, config);


    Category.associate = function (models) {
        Category.hasMany(models.Product, { 
            as: 'products' ,
            foreingKey: "category_id"

        })
    }  
    
    
    return Category;
};
