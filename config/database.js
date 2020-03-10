const Sequelize = require('sequelize');

const connection = new Sequelize('project_nodejs_tp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = connection;