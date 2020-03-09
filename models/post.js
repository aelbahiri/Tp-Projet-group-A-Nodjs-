const Sequelize = require('Sequelize');
const connection = require('../config/database');

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

    auteur: {
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
    }

});
