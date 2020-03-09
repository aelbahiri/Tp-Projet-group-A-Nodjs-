const connection = require('../config/database');
const Sequelize = require('Sequelize');

const tag = connection.define('tag', {
    id: {
        typs: Sequelize.INTEGER,
        autoIcrement: true,
        primaryKey: true
    },

})