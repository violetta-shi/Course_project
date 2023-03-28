const router = require('express').Router();
const usersController = require('../controller/users.controller');

router.route('/')
    .get(usersController.findAll)
    .post(usersController.create);

module.exports = router;