const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

const requireToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization
		const user = await User.findByToken(token)
        req.user = user
		next()
	} catch (e) {
		next(e)
	}
}

const isAdminCheck = (req, res, next) => {
	requireToken(req, res, next, () => { 
    if (!req.user.isAdmin) {
      return res.status(403).send('You shall not pass!')
    } else {
      next()
    }
  })
}

router.use( '/singleproduct', require( './singleproduct' ) )
router.use('/users', require('./users'))
router.use('/strengthequipment', require('./strength_view'))
router.use('/cardioequipment', require('./cardio_view'))
router.use('/recoveryequipment', require('./recovery_view'))
router.use("/allProducts", require('./allProducts'))
router.use("/adminview", isAdminCheck, require('./admin_view'))
router.use("/adminviewproduct", isAdminCheck, require('./admin_view_product'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


