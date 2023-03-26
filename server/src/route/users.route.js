const router = require('express').Router();
const usersController = require('../controller/users.controller');

router.route('/')
    .get(usersController.findAll);

module.exports = router;