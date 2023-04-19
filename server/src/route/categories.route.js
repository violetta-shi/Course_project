const router = require('express').Router();
const categoriesController = require('../controller/categories.controller');

router.route('/')
    .get(categoriesController.findAll);

module.exports = router;
