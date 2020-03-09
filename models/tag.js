const Sequelize = require('sequelize');
const connection = require('./../config/database');

const tag = connection.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lebelle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});

module.exports = tag