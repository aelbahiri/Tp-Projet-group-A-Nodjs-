const connection = require('../config/database');
const Sequelize = require('Sequelize');

const post = connection.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    urlImage: {
        type: Sequelize.STRING,
        allowNull: false
    },

    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }

});

module.exports = post;