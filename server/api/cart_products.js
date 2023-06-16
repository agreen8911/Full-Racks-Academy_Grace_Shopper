const router = require('express').Router()
module.exports = router
const { models: { Cart_Products }} = require('../db')

router.post('/addcartproduct', async (req, res, next) => {
try {
        const existingCartProduct = await Cart_Products.findOne({
            where: {
                orderId: req.body.id,
                productId: req.body.productId
            }
        });
        if(!existingCartProduct){
            const newCartProduct = await Cart_Products.create({
                orderId: req.body.id,
                productId: req.body. productId,
                unitPrice: req.body.price,
                quantity: req.body.quantity 
            });
            res.send(newCartProduct)
        } else {
            existingCartProduct.quantity += req.body.quantity;
            res.send(existingCartProduct)
        }
} catch (error) {
    next(error)
}
})