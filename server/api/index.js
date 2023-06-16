const router = require('express').Router()
module.exports = router

router.use( '/singleproduct', require( './singleproduct' ) )
router.use('/users', require('./users'))
router.use('/strengthequipment', require('./strength_view'))
router.use('/cardioequipment', require('./cardio_view'))
router.use('/recoveryequipment', require('./recovery_view'))
router.use("/allProducts", require('./allProducts'))

router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
