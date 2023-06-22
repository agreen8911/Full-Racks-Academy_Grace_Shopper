const router = require('express').Router();
const { models: { Cart_Products, Cart } } = require( '../db' );

module.exports = router;


router.get( "/:id", async ( req, res, next ) => {

    try {
        const singleCartId = req.params.id;
        const cartDisplay = await Cart.findAll({
            where:{userId:singleCartId},
            include:[Cart_Products]
        });
     
    res.send(cartDisplay);
    } catch ( err ) {
      console.log(err)
    }
});

// router.put("/:id", async (req, res, next) => {
// 	try {
// 		const user = await Cart.findOne({
// 			where: { userId: req.params.id },
// 		});
// 		res.send(await user.update(req.body));
// 	} catch (error) {
// 		next(error);
// 	}
// });

