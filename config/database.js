const Sequelize = require('sequelize');

const connection = new Sequelize('project_nodejs_tp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;