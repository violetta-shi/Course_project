const db = require('../persistence/mysql');

const findAllByCategoryId = async (categoryId) => {
    const [products, ] = await db.query(`
        SELECT id, grouping_key, image_url, name, image_url, size, price, weight
        FROM product
        WHERE category_id = ?`, [categoryId]);
    return products;
};

module.exports = {
    findAllByCategoryId,
};
