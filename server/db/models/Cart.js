const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
 status: {
    type: Sequelize.STRING,
    allowNull: false,

  }
  
})

module.exports = Cart



//I AM MAKING THIS COMMENT FOR TEST 