const db = require('../persistence/mysql');

const findAll = async () => {
    const [users, ] = await db.query('SELECT * FROM `users`');
    return users;

};

module.exports = {
    findAll
};
