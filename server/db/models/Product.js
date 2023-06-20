const Sequelize = require('sequelize')
const db = require('../db')


const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
        defaultValue: "data:image/jpeg;base64,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"
  },
  productType: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Product
