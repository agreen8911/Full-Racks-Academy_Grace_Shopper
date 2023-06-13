const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')


const Cart_Products = db.define('cart_products', {
    unitPrice: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0
        }
      }
})


module.exports = Cart_Products



