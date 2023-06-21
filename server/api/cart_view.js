const router = require('express').Router();
const { models: { Cart_Products, Cart } } = require( '../db' );

module.exports = router;



router.get( "/:id", async ( req, res, next ) => {
    try {
        
        const _userId = req.params.id;
        const cartDisplay = await Cart.findAll({
            where: { userId: _userId, status:"pending" },
            
            include:Cart_Products,
            

        } );
     
    res.send(cartDisplay);
    } catch ( err ) {
       
    next(err);
  }
});

// router.get( "/:id", async ( req, res, next ) => {
//     try {
        
//         const singleCartId = req.params.id;
//         const cartDisplay = await Cart.findAll({
//             where:{id:singleCartId},
//             include:[Cart_Products]
            

//         } );
     
//     res.send(cartDisplay);
//     } catch ( err ) {
       
//     next(err);
//   }
// });