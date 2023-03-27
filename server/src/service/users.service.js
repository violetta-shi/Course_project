const db = require('../persistence/mysql');

const findAll = async () => {
    const [users, ] = await db.query('SELECT * FROM `users`');
    return users;
};

const findByEmail = async (email) => {
    const [[user], ] = await db.query('SELECT * FROM `users` WHERE email = ?', [email]);
    return user;
}

const findById = async (id) => {
    const [[user], ] = await db.query('SELECT * FROM `users` WHERE id = ?', [id]);
    return user;
}

module.exports = {
    findAll,
    findByEmail,
    findById,
};
