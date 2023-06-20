const router = require('express').Router()
module.exports = router


const { models: { Cart }} = require('../db')



router.get('/:id', async (req, res, next) => {
try {
    const openCart = await Cart.findOne({
        where: {
            userId: req.params.id,
            status: "pending",
        }
    });
    if(!openCart) {
        const newCart = await Cart.create({
            userId: req.params.id,
            status: "pending"
        });
        res.send(newCart)
    } else {
        res.send(openCart)
    }
    
} catch (error) {
    next(error)
}
})


// router.post('/addcart', async (req, res, next) => {
//     const {userId, productId, quantity, price, productName} = req.params
//     try {
//         const pendingCart = Cart.findOne({
//             where: {
//                 userId : userId,
//                 status: 'pending'
//             }
            
//         })
//         if(pendingCart){
//             orderId = pendingCart.id
//             Cart_Products.create({
//                 productId: productId,
//                 CartId: orderId,
//                 quantity: quantity,
//                 price: price,
//                 productName: productName

//             })

//         } else if (!pendingCart) {
//             const newCart = Cart.create({
//                 userId: userId,
//                 status: 'pending'
//             })
//             orderId = newCart.id
//             Cart_Products.create({
//                 productId: productId,
//                 CartId: orderId,
//                 quantity: quantity,
//                 price: price,
//                 productName: productName
//             })

//         }
//     } catch (error) {
//         next(error)
//     }

// })