module.exports = (sequelize, dataTypes) => {
    const alias = "product_id"
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

    }
    const config = {
        tableName: 'product_id',
        timestamps: true,
        paranoid: true
    }
    let product_id = sequelize.define(alias,cols, config)

    product_id.associate = function (models){
        product_id.belongsTo(models.product,{
            as: "product",
            ForeignKey: "product_id",
        })

};
}