const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get("/", async (req, res, next) => {
	try {
		const cardioEquipment = await Product.findAll({
			where: { productType: "Cardio" },
		});
		res.send(cardioEquipment);
	} catch (err) {
		next(err);
	}
});