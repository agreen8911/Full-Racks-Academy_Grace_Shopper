const router = require('express').Router()
const {
  models:
  { Product },
} = require( "../db" );

router.get("/:id", async (req, res, next) => {
  try {
    const singleProductID = req.params.id;

      const SingleProduct = await Product.findOne( {
       where: { id: singleProductID },
          
      }
          );
          res.send(SingleProduct)

    if (!SingleProduct) {
      return res.status(404).send("SingleProduct not found");
    }

    
  } catch (error) {
    next(error);
  }
});

module.exports = router;
