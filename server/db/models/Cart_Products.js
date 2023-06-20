const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')


const Cart_Products = db.define('cart_products', {
    unitPrice: {
        type: Sequelize.INTEGER,

      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,

      }
})


module.exports = Cart_Products



