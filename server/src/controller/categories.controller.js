const categoriesService = require('../service/categories.service');

const findAll = async (req, res, next) => {
    try {
        res.json(await categoriesService.findAll());
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = {
    findAll,
};
