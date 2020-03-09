
const Sequelize = require('Sequelize');
const connection = require('../config/database');



const comment = connection.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content : {
     type: Sequelize.STRING ,  
     allowNull: false     
      
  },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }

});

module.exports = comment;

