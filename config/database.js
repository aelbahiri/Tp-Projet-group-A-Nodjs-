const Sequelize = require('sequelize');

const connection = new Sequelize('project_nodejs_tp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    'port': 3307
});

module.exports = connection;