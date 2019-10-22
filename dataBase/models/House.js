module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.BIGINT,
            foreignKey: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        }
    }, {
        tableName:'House',
        timestamps: false
    });

    return House;
};