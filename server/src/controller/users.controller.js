const usersService = require('../service/users.service');

const findAll = async (req, res, next) => {
    try {
        res.json(await usersService.findAll());
    } catch (err) {
        console.error(err);
        next(err);
    }

};

module.exports = {
    findAll
};
