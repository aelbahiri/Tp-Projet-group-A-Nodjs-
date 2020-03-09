const Sequelize = require('sequelize');
const connection = require('./../config/database');

const post = connection.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    urlImage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    <<
    << << < HEAD
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
});

module.exports = post; ===
=== =

active: {
type: Sequelize.BOOLEAN,
allowNull: true
}

});

module.exports = post; >>>
>>> > 0974e79 f180c5479e40ff8d6893264a0c55bea95