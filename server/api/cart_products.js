const router = require('express').Router()
module.exports = router
const { models: { Cart_Products }} = require('../db')

router.post('/', async (req, res, next) => {
try {
        const existingCartProduct = await Cart_Products.findOne({
            where: {
                cartId: req.body.cartId,
                productId: req.body.productId
            },
        });
        if(!existingCartProduct){
            const newCartProduct = await Cart_Products.create({
                cartId: req.body.cartId,
                productId: req.body.productId,
                unitPrice: req.body.unitPrice,
                quantity: req.body.quantity 
            });
            res.send(newCartProduct)
        } else {
            existingCartProduct.quantity += req.body.quantity;
            await existingCartProduct.save()
            res.send(existingCartProduct)
        }
} catch (error) {
    next(error)
}
})