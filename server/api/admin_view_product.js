const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router


router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await Product.findByPk(id);
		data.destroy();
		res.send(data);
	} catch (err) {
		res.sendStatus(500);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const product = await Product.findOne({
			where: { id: req.params.id },
		});
		res.send(await product.update(req.body));
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const { productName, price, description, imageURL, productType } = req.body;
		const newProduct = await Product.create({
			productName: productName,
            price: price,
            description: description,
            imageURL: imageURL,
            productType: productType
		});
		res.send(newProduct);
	} catch (err) {
		next(err);
	}
});