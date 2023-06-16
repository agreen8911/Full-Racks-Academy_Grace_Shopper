//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Cart_Products = require("./models/Cart_Products")

//associations could go here!
// User.hasOne(Cart);
// Cart.belongsTo(User);
// User.hasMany(Product);

// User.hasMany(Product, { as: 'cartItems', foreignKey: 'cartItemId' });
// Product.belongsTo(User, { foreignKey: 'cartItemId' });

//Product.belongsTo(User)
// Product.belongsToMany(User, { through: "Cart" });

Cart.belongsTo(User)
User.hasMany(Cart)

Product.belongsToMany(Cart, { through: Cart_Products })
Cart.belongsToMany(Product, { through: Cart_Products })

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.hasMany(Cart_Products)
Cart_Products.belongsTo(Cart)

Product.hasMany(Cart_Products)
Cart_Products.belongsTo(Product)

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    Cart_Products,
  },
};
