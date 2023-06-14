const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get("/", async (req, res, next) => {
	try {
		const recoveryEquipment = await Product.findAll({
			where: { productType: "Recovery" },
		});
		res.send(recoveryEquipment);
	} catch (err) {
		next(err);
	}
});