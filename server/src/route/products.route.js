const router = require('express').Router({ mergeParams: true });
const productsController = require('../controller/products.controller');

router.route('/')
    .get(productsController.findAllByCategoryId);

module.exports = router;
