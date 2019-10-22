module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        users_id: {
            type: DataTypes.BIGINT,
            foreignKey: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName:'Token',
        timestamps: false
    });

    return House;
};