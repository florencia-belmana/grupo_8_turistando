const { ForeignKeyConstraintError } = require("sequelize/types")

module.exports = (sequelize, dataTypes) => {
    const alias = "User_id"
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

    }
    const config = {
        tableName: 'user_id',
        timestamps: true,
        paranoid: true
    }   

    let User_id = sequelize.define(alias,cols, config)
        User_id.associate = function (models){
                User_id.belongsTo(models.Users,{
                    as: "Users",
                    ForeignKey: "user_id",
                })

        }

}    
