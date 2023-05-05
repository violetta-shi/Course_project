const { pool, transactional} = require('../persistence/mysql');
const { v4: uuidv4 } = require('uuid');

const findAllByCategoryId = async (categoryId) => {
    const [products, ] = await pool.query(`
        SELECT id, grouping_key, image_url, name, image_url, size, price, weight
        FROM product
        WHERE category_id = ?`, [categoryId]);
    return products;
};

const createProduct = async (product) => transactional(async (connection) => {
    const grouping_key = uuidv4();
    const args = product.variants.map(({ size, price, weight }) =>
        [grouping_key, product.category_id, product.name, product.image_url, size, price, weight]);
    await connection.query(
        `INSERT INTO product (grouping_key, category_id, name, image_url, size, price, weight) VALUES ?`,
        [args]
    );
});

module.exports = {
    findAllByCategoryId,
    createProduct,
};
