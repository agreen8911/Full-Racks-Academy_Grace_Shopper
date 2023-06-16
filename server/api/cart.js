const router = require('express').Router()
module.exports = router

const { models: { Cart }} = require('../db')


router.post('/cart', async (req, res, next) => {
try {

    const newCart = await Cart.create({
        where: {
            userId: userId
        }
    })

res.send(newCart)
    
} catch (error) {
    console.log(error)
}

})