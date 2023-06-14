const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get("/", async (req, res, next) => {
	try {
		const strengthEquipment = await Product.findAll({
			where: { productType: "Strength" },
		});
		res.send(strengthEquipment);
	} catch (err) {
		next(err);
	}
});