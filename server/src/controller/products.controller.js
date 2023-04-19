const productsService = require('../service/products.service');

const findAllByCategoryId = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        res.json(await productsService.findAllByCategoryId(categoryId));
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = {
    findAllByCategoryId,
};
