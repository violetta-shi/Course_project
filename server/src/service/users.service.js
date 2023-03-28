const db = require('../persistence/mysql');

const findAll = async () => {
    const [users, ] = await db.query('SELECT * FROM `user`');
    return users;
};

const findByEmail = async (email) => {
    const [[user], ] = await db.query('SELECT * FROM `user` WHERE email = ?', [email]);
    return user;
};

const findById = async (id) => {
    const [[user], ] = await db.query('SELECT * FROM `user` WHERE id = ?', [id]);
    return user;
};

const create = async (user) => {
    const { email, password, role } = user;
    await db.query(
        'INSERT INTO `user`(`email`, `password`, `role`) VALUES(?, ?, ?)',
        [email, password, role]
    );
}

module.exports = {
    findAll,
    findByEmail,
    findById,
    create,
};
